document.addEventListener("DOMContentLoaded", () => {
    const STORAGE_KEY = "contentItemsDarkFantasy_v5";
    const contentList = document.getElementById("content-list");
    const technicalSiteUrl = "https://swathi-k-shekar.github.io/Swathi.github.io/";

    const iconClasses = {
        drama: "fas fa-theater-masks",
        film: "fas fa-film",
        poem: "fas fa-leaf",
        song: "fas fa-music",
        novel: "fas fa-book-open",
        technical: "fas fa-laptop-code"
    };

    const defaultItems = [
        {
            title: "WEBSERIES EDITION",
            titleEn: "Web-series concepts and episode scripts",
            category: "Creative writing",
            summary: "I can develop series ideas, dramatic characters, and episode-by-episode scripts.",
            icon: "drama",
            contactUrl: "#contact",
            ctaLabel: "Discuss a writing idea"
        },
        {
            title: "MOVIESCRIPT",
            titleEn: "Movie scripts and screenplays",
            category: "Creative writing",
            summary: "I can shape movie ideas into character-led screenplays and cinematic scenes.",
            icon: "film",
            contactUrl: "#contact",
            ctaLabel: "Discuss a writing idea"
        },
        {
            title: "GENZ POEMS",
            titleEn: "Short poems with a contemporary voice",
            category: "Creative writing",
            summary: "I can write small, expressive poems with a fresh Gen Z point of view.",
            icon: "poem",
            contactUrl: "#contact",
            ctaLabel: "Discuss a writing idea"
        },
        {
            title: "SONGS",
            titleEn: "Original lyrics and song concepts",
            category: "Creative writing",
            summary: "I can create song lyrics shaped around a mood, rhythm, and story.",
            icon: "song",
            contactUrl: "#contact",
            ctaLabel: "Discuss a writing idea"
        },
        {
            title: "NOVEL",
            titleEn: "Fictional stories and novel concepts",
            category: "Creative writing",
            summary: "I can develop fictional worlds, memorable characters, and novel-length stories.",
            icon: "novel",
            contactUrl: "#contact",
            ctaLabel: "Discuss a writing idea"
        },
        {
            title: "TECHNICAL SITE",
            titleEn: "Technical portfolio",
            category: "Technical",
            summary: "Explore my technical work and projects on my dedicated site.",
            icon: "technical",
            url: technicalSiteUrl,
            ctaLabel: "Visit technical site"
        }
    ];

    const legacyStarterItems = [
        { title: "Technical Frameworks", category: "Technical" },
        { title: "Creative Portfolio", category: "Creative" }
    ];

    function saveItems(items) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
        } catch {
            // The page can still show the built-in portfolio if storage is disabled.
        }
    }

    function isLegacyStarterItem(item) {
        return legacyStarterItems.some((legacyItem) => (
            item &&
            item.title === legacyItem.title &&
            item.category === legacyItem.category
        ));
    }

    function getSafeExternalUrl(value) {
        if (typeof value !== "string" || !value.trim()) return "";

        try {
            const parsedUrl = new URL(value);
            return parsedUrl.protocol === "https:" ? parsedUrl.href : "";
        } catch {
            return "";
        }
    }

    function normalizeItem(item) {
        if (!item || typeof item !== "object" || Array.isArray(item)) return null;

        const category = typeof item.category === "string" ? item.category.trim() : "";
        const title = typeof item.title === "string" ? item.title.trim() : "";
        if (!title || !category) return null;

        return {
            title,
            titleEn: typeof item.titleEn === "string" ? item.titleEn : "",
            category,
            summary: typeof item.summary === "string" ? item.summary : "",
            icon: typeof item.icon === "string" && Object.hasOwn(iconClasses, item.icon)
                ? item.icon
                : "drama",
            url: getSafeExternalUrl(item.url),
            contactUrl: item.contactUrl === "#contact" ? "#contact" : "",
            ctaLabel: typeof item.ctaLabel === "string" ? item.ctaLabel : ""
        };
    }

    function loadContentItems() {
        let savedValue;

        try {
            savedValue = localStorage.getItem(STORAGE_KEY);
        } catch {
            return defaultItems;
        }

        if (savedValue === null) {
            saveItems(defaultItems);
            return defaultItems;
        }

        try {
            const parsed = JSON.parse(savedValue);
            if (!Array.isArray(parsed)) return defaultItems;
            if (parsed.length === 0) {
                saveItems(defaultItems);
                return defaultItems;
            }

            if (parsed.some(isLegacyStarterItem)) {
                const customItems = parsed.filter((item) => !isLegacyStarterItem(item));
                const migratedItems = [...defaultItems, ...customItems];
                saveItems(migratedItems);
                return migratedItems.map(normalizeItem).filter(Boolean);
            }

            const validItems = parsed.map(normalizeItem).filter(Boolean);
            return validItems.length > 0 ? validItems : defaultItems;
        } catch {
            // Leave malformed stored data untouched; render defaults for this visit.
            return defaultItems;
        }
    }

    const contentItems = loadContentItems();

    function createTextElement(tagName, className, text) {
        const element = document.createElement(tagName);
        element.className = className;
        element.textContent = text;
        return element;
    }

    function renderCard(item) {
        const card = document.createElement(item.url ? "a" : "article");
        card.className = "content-card";
        card.dataset.category = item.category;

        if (item.url) {
            card.href = item.url;
            card.target = "_blank";
            card.rel = "noopener noreferrer";
            card.setAttribute("aria-label", `${item.title}: ${item.ctaLabel || "open link"} (opens in a new tab)`);
        }

        const cardTopline = document.createElement("div");
        cardTopline.className = "card-topline";

        const icon = document.createElement("div");
        icon.className = "card-icon";
        icon.setAttribute("aria-hidden", "true");
        const iconGlyph = document.createElement("i");
        iconGlyph.className = iconClasses[item.icon] || iconClasses.drama;
        icon.appendChild(iconGlyph);

        cardTopline.append(icon, createTextElement("span", "card-category", item.category));
        card.appendChild(cardTopline);
        card.appendChild(createTextElement("h3", "", item.title));

        if (item.titleEn) {
            card.appendChild(createTextElement("p", "card-meta", item.titleEn));
        }

        if (item.summary) {
            card.appendChild(createTextElement("p", "card-summary", item.summary));
        }

        if (item.url && item.ctaLabel) {
            const action = createTextElement("span", "card-action", item.ctaLabel);
            action.appendChild(document.createTextNode(" ↗"));
            card.appendChild(action);
        } else if (item.contactUrl && item.ctaLabel) {
            const action = createTextElement("a", "card-action", item.ctaLabel);
            action.href = item.contactUrl;
            action.appendChild(document.createTextNode(" ↗"));
            card.appendChild(action);
        }

        return card;
    }

    function displayContent() {
        if (!contentList) return;
        contentList.replaceChildren();

        if (contentItems.length === 0) {
            contentList.appendChild(createTextElement("p", "empty-state", "Portfolio items will appear here soon."));
            return;
        }

        contentItems.forEach((item) => contentList.appendChild(renderCard(item)));
    }

    // Retain the old global hook in case an older page template still calls it.
    window.clearFilters = displayContent;
    displayContent();
});
