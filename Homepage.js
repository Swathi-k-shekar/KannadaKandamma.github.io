document.addEventListener('DOMContentLoaded', () => {
    const contentList = document.getElementById('content-list');
    const filterCategory = document.getElementById('filter-category');

    // Default items
    const defaultItems = [
        {
            title: 'Technical Frameworks',
            titleEn: 'Hybrid Playwright-Java Automation Engine',
            category: 'Technical',
            summary: 'Scalable testing architecture, POM structure, and high-speed execution.',
            iconFile: 'assets/Theater Masks.png'
        },
        {
            title: 'Creative Portfolio',
            titleEn: 'Sapnaaradnya Creations / Narrative Series',
            category: 'Creative',
            summary: 'Scriptwriting, digital storytelling, and cinematic concepts.',
            iconFile: 'assets/Film Reel.png'
        }
    ];

    // Load items from localStorage
    let contentItems = JSON.parse(localStorage.getItem('contentItemsDarkFantasy_v5'));
    if (!contentItems || contentItems.length === 0) {
        contentItems = defaultItems;
        localStorage.setItem('contentItemsDarkFantasy_v5', JSON.stringify(contentItems));
    }

    function renderCard(item) {
        const card = document.createElement('div');
        card.className = 'content-card';
        card.setAttribute('data-category', item.category);

        let iconHtml = item.iconFile ? `<img src="${item.iconFile}" alt="${item.titleEn}" class="category-icon">` : '';

        card.innerHTML = `
            ${iconHtml}
            <h3>${item.title}</h3>
            <p class="card-meta">${item.titleEn}</p>
            <p class="card-summary">${item.summary || ''}</p>
        `;

        card.addEventListener('click', () => {
            if (item.category === 'Technical') {
                window.open('https://github.com/SapnaAradnya', '_blank');
            } else if (item.category === 'Creative') {
                window.open('https://www.youtube.com/@sapnaaradnyaYT', '_blank');
            }
        });

        return card;
    }

    function displayContent() {
        if (!contentList) return;
        contentList.innerHTML = '';
        const selectedCategory = filterCategory ? filterCategory.value : 'all';

        const filteredItems = contentItems.filter(item => {
            return selectedCategory === 'all' || item.category === selectedCategory;
        });

        if (filteredItems.length === 0) {
            contentList.innerHTML = '<p style="text-align:center; grid-column: 1 / -1; color:#ccc;">No content found.</p>';
            return;
        }

        filteredItems.forEach(item => {
            contentList.appendChild(renderCard(item));
        });
    }

    function populateFilters() {
        if (!filterCategory) return;

        const categories = [...new Set(contentItems.map(item => item.category))];
        filterCategory.querySelectorAll('option:not([value="all"])').forEach(opt => opt.remove());

        categories.forEach(cat => {
            const opt = new Option(cat, cat);
            filterCategory.appendChild(opt);
        });
    }

    if (filterCategory) filterCategory.addEventListener('change', displayContent);

    window.clearFilters = () => {
        if (filterCategory) filterCategory.value = 'all';
        displayContent();
    };

    populateFilters();
    displayContent();
});
