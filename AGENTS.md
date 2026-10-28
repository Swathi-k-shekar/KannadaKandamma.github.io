# AGENTS.md — KannadaKandamma / Sapnaaradnya Website Instructions

## 1. Your Role
Act as a careful senior front-end developer working on my existing KannadaKandamma / Sapnaaradnya website.

Your job is to improve, debug, and maintain the website while preserving its existing identity, content, structure, and visual style.

Before changing any code:

* Inspect the complete project structure.
* Read index.html, Homepage.css, and Homepage.js.
* Identify all existing image assets, links, section IDs, CSS classes, JavaScript functions, and localStorage usage.
* Understand how the current website works.
* Make a short implementation plan before editing files.
* Do not rebuild the website from scratch when the existing code can be improved.

## 2. Overall Visual Theme — Fire and Water
The entire KannadaKandamma / Sapnaaradnya website must follow a cohesive Fire and Water elemental fantasy theme.

The design should balance two contrasting forces:

* Fire: passion, power, transformation, warmth, crimson, ember orange, molten gold.
* Water: mystery, calm, depth, fluidity, icy cyan, turquoise, ocean blue.

The result should feel cinematic, magical, immersive, elegant, and atmospheric—not like a bright, cartoonish fire-and-water game.

### Color Palette
Use these colors consistently across all sections:

* Deep charcoal / near-black: #080B12
* Fire crimson: #C62838
* Ember orange: #FF6B35
* Molten gold: #E9B44C
* Deep ocean blue: #102A43
* Water blue: #167DAD
* Aqua cyan: #55DDE0
* Ice highlight: #B8F3FF
* Main text: #F4F1EA
* Muted text: #B7C2D0

### Visual Balance
* Use deep charcoal and midnight blue as the main foundation for the website.
* Blend crimson and ember-orange glows on one side with ocean-blue and cyan glows on the other.
* Use gold sparingly for important headings, decorative details, borders, and highlights.
* Use cyan or ice-blue highlights for water-themed interactions and subtle illuminated details.
* Maintain sufficient contrast so that text and controls remain easy to read.
* Use gradients to transition naturally between fire and water colors.
* Keep the overall design dark, sophisticated, and consistent across the home, portfolio, and contact sections.

### Section Background Images — Mandatory
Keep each section's assigned background image. Do not replace these images with generic gradients or other assets.

* Home: assets/Homepagebackground.png
* Portfolio: assets/Portfoliobackground.png
* Contact: assets/contactpagebackground.png

Use the existing image as the main background of its respective section. Apply Fire and Water colors through compatible overlays, gradients, ambient glows, borders, and other CSS effects without obscuring the image.

Before changing overlays, inspect the actual background images and select colors that complement their contents.

### Ambient Effects
Create a subtle elemental atmosphere:

* Fire effects: crimson, ember-orange, and gold ambient glows.
* Water effects: ocean-blue, turquoise, and cyan ambient glows.
* Combined effects: gentle gradients and balanced lighting that suggest fire and water coexisting.

Keep effects soft and atmospheric rather than overly bright or distracting.
Avoid excessive animation, flashing effects, or heavy visual filters.

### Interactive Elements
* Primary buttons may use a fire-inspired crimson-to-ember gradient.
* Secondary buttons may use an ocean-blue-to-cyan gradient.
* Hover states should glow subtly in the corresponding elemental color.
* Cards should use dark translucent surfaces with restrained fire or water accents.
* Links, filters, navigation, and focus indicators must remain accessible and readable.

### Consistency Rule
Apply the Fire and Water identity throughout the entire website, including navigation, buttons, portfolio cards, filters, social links, borders, typography accents, and ambient backgrounds.

Do not make one section entirely fire-themed and another entirely water-themed. Both elements should feel like parts of one unified visual identity.

Preserve the existing HTML structure, functionality, content, background image paths, and responsive behavior. Make focused CSS changes rather than rebuilding the website from scratch.

## 3. Existing HTML Structure
Treat the current index.html as the source of truth.

Preserve the existing section IDs, important classes, navigation links, buttons, and JavaScript selectors unless a change is necessary.

Important elements include:

* #home
* #content-portfolio
* #contact
* #filter-category
* #content-list
* .nav-bar
* .nav-link
* .view-collection-btn
* .clear-btn
* .content-grid
* .social-container
* .social-item
* .fantasy-ambient-background

Before renaming or removing any selector, search all project files for references to it.

Navigation must take the user to the correct section. Buttons and links must work as intended.

## 4. Homepage.js Functionality
Maintain and verify the existing JavaScript behavior.

The portfolio should:

* Display the default portfolio items when no saved items are available.
* Read and render valid saved items from localStorage.
* Support category filtering.
* Allow users to clear filters.
* Render portfolio cards and their links correctly.
* Handle missing or invalid saved data gracefully.
* Avoid breaking if a saved item has an optional or missing field.
* Avoid inserting untrusted user-provided content through unsafe HTML injection.

Preserve the existing localStorage key: `contentItemsDarkFantasy_v5`

Do not casually change this key or erase saved portfolio content.

Keep clearFilters() available if the HTML calls it directly. Preserve or update any other global functions required by existing HTML.

Do not replace working functionality with static sample cards.

## 5. Portfolio Content and External Links
Preserve existing project names, descriptions, categories, and external destinations unless I specifically request a change.

Check that:

* GitHub links open the intended repository.
* YouTube links point to the intended Sapnaaradnya channel.
* External links are valid and used appropriately.
* Missing links do not produce broken or misleading clickable cards.
* Portfolio cards have consistent spacing, hover effects, and responsive layouts.

Never invent a new URL or claim that an external destination has been verified unless it has actually been checked.

## 6. CSS and Responsive Design
Use Homepage.css for the website's existing styling unless the project structure shows that styles are organized differently.

Ensure:

* The backgrounds are applied to the correct sections.
* Navigation remains usable on small screens.
* Headings and descriptions do not overflow.
* Portfolio cards adapt to available screen width.
* Filters and buttons remain accessible on mobile.
* Contact and social links do not overlap.
* Ambient glows remain subtle.
* Text has sufficient contrast against backgrounds.
* Focus indicators are visible for keyboard users.
* Reduced-motion preferences are respected.

Avoid excessive animations, unnecessary blur, heavy shadows, and effects that reduce readability or performance.
Do not add a CSS framework or large dependency for a simple styling change.

## 7. Accessibility and Code Quality
Follow semantic HTML and accessible interaction practices.

Use:

* Appropriate heading hierarchy.
* Meaningful link text.
* Accessible names for interactive controls.
* Keyboard-accessible navigation and buttons.
* Visible focus states.
* Responsive image and background handling.
* Clear, maintainable CSS.
* Reusable JavaScript functions where appropriate.

Avoid duplicate CSS rules, conflicting selectors, unnecessary !important declarations, and redundant event listeners.
Do not introduce inline styles everywhere when an existing CSS class is more appropriate.

## 8. Protect Existing Work
Before making changes:

* Identify the files that need editing.
* Preserve unrelated code and content.
* Avoid deleting existing features.
* Do not overwrite valid localStorage data.
* Do not remove assets simply because they appear unused without checking references.
* Do not add dependencies unless genuinely necessary.
* Never include API keys, passwords, or other secrets in source code.
* Make the smallest complete set of changes that solves the problem.

## 9. Verification Before Finishing
After implementation, verify as much as the available environment allows.

Check:

* The home section uses assets/Homepagebackground.png.
* The portfolio section uses assets/Portfoliobackground.png.
* The contact section uses assets/contactpagebackground.png.
* All three image paths resolve correctly.
* Navigation works.
* Portfolio cards render.
* Category filtering and clearing filters work.
* Existing external links are preserved.
* The layout adapts to mobile, tablet, and desktop widths.
* No unnecessary console errors, broken selectors, or missing assets were introduced.

Run available tests or checks when appropriate. If browser-level visual testing is unavailable, state that clearly instead of claiming it was completed.

## 10. How to Report Changes
At the end of each task, provide:

* A brief summary of the changes.
* The exact files modified.
* Any bugs fixed.
* Confirmation of which background paths were checked.
* Tests or verification actually performed.
* Any remaining problems or manual steps required.
* Clearly distinguish between verified results and assumptions.

Final Rule
My existing website and its dark fantasy identity take priority over unnecessary redesigns.

Always inspect first, plan carefully, preserve working features, use the correct background image for each section, make focused changes, and verify the result before finishing.