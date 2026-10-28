
document.addEventListener('DOMContentLoaded', () => {
    const contentList = document.getElementById('content-list');
    const filterCategory = document.getElementById('filter-category');

    const STORAGE_KEY = 'contentItemsDarkFantasy_v5';

    // Default portfolio items
    const defaultItems = [
        {
            title: 'Technical Frameworks',
            titleEn: 'Hybrid Playwright-Java Automation Engine',
            category: 'Technical',
            summary:
                'Scalable testing architecture, POM structure, and high-speed execution.',
            iconFile: 'assets/Theater Masks.png',
            link: 'https://github.com/SapnaAradnya'
        },
        {
            title: 'Creative Portfolio',
            titleEn: 'Sapnaaradnya Creations / Narrative Series',
            category: 'Creative',
            summary:
                'Scriptwriting, digital storytelling, and cinematic concepts.',
            iconFile: 'assets/Film Reel.png',
            link: 'https://www.youtube.com/@SapnaaradnyaYT'
        }
    ];

    // Load portfolio items safely from localStorage
    function loadContentItems() {
        try {
            const savedItems = localStorage.getItem(STORAGE_KEY);

            if (savedItems !== null) {
                const parsedItems = JSON.parse(savedItems);

                if (
                    Array.isArray(parsedItems) &&
                    parsedItems.every(item =>
                        item &&
                        typeof item === 'object' &&
                        typeof item.title === 'string' &&
                        typeof item.category === 'string'
                    )
                ) {
                    return parsedItems;
                }
            }
        } catch (error) {
            console.error('Error loading portfolio items:', error);
        }

        saveContentItems(defaultItems);
        return defaultItems;
    }

    // Save portfolio items
    function saveContentItems(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch (error) {
            console.error('Unable to save portfolio items:', error);
        }
    }

    let contentItems = loadContentItems();

    // Create elements without inserting user-provided HTML
    function createTextElement(tag, className, text) {
        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        element.textContent = text || '';

        return element;
    }

    // Render a portfolio card
    function renderCard(item) {
        const card = document.createElement('article');

        card.className = 'content-card';
        card.dataset.category = item.category;

        // Portfolio icon
        if (item.iconFile) {
            const icon = document.createElement('img');

            icon.src = item.iconFile;
            icon.alt = '';
            icon.className = 'category-icon';
            icon.loading = 'lazy';

            icon.addEventListener('error', () => {
                icon.remove();
            });

            card.appendChild(icon);
        }

        // Portfolio title
        card.appendChild(
            createTextElement('h3', '', item.title)
        );

        // English subtitle
        card.appendChild(
            createTextElement('p', 'card-meta', item.titleEn)
        );

        // Summary
        card.appendChild(
            createTextElement('p', 'card-summary', item.summary)
        );

        // Make the card clickable if it has a valid link
        if (item.link) {
            card.classList.add('clickable-card');
            card.tabIndex = 0;
            card.setAttribute('role', 'link');
            card.setAttribute('aria-label', `Open ${item.title}`);

            function openCard() {
                try {
                    const url = new URL(item.link, window.location.href);

                    if (['https:', 'http:'].includes(url.protocol)) {
                        window.open(
                            url.href,
                            '_blank',
                            'noopener,noreferrer'
                        );
                    }
                } catch (error) {
                    console.error('Invalid portfolio link:', error);
                }
            }

            card.addEventListener('click', openCard);

            card.addEventListener('keydown', event => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openCard();
                }
            });
        }

        return card;
    }

    // Display cards according to the selected category
    function displayContent() {
        if (!contentList) {
            console.warn('Element #content-list was not found.');
            return;
        }

        contentList.replaceChildren();

        const selectedCategory = filterCategory
            ? filterCategory.value
            : 'all';

        const filteredItems = contentItems.filter(item => {
            return (
                selectedCategory === 'all' ||
                item.category === selectedCategory
            );
        });

        // Display a message when no matching items exist
        if (filteredItems.length === 0) {
            const message = createTextElement(
                'p',
                'empty-message',
                'No content found.'
            );

            contentList.appendChild(message);
            return;
        }

        const fragment = document.createDocumentFragment();

        filteredItems.forEach(item => {
            fragment.appendChild(renderCard(item));
        });

        contentList.appendChild(fragment);
    }

    // Populate category dropdown dynamically
    function populateFilters() {
        if (!filterCategory) {
            return;
        }

        const previousSelection = filterCategory.value;

        filterCategory.replaceChildren(
            new Option('All Categories', 'all')
        );

        const categories = [
            ...new Set(
                contentItems
                    .map(item => item.category)
                    .filter(category => category.trim() !== '')
            )
        ].sort((a, b) => a.localeCompare(b));

        categories.forEach(category => {
            filterCategory.add(
                new Option(category, category)
            );
        });

        filterCategory.value = categories.includes(previousSelection)
            ? previousSelection
            : 'all';
    }

    // Filter event
    if (filterCategory) {
        filterCategory.addEventListener('change', displayContent);
    }

    // Clear filters
    window.clearFilters = function () {
        if (filterCategory) {
            filterCategory.value = 'all';
        }

        displayContent();
    };

    // Initialize the portfolio
    populateFilters();
    displayContent();
});
