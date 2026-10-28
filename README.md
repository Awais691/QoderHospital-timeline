# CareWell Hospital

A complete, responsive multi-page hospital website for the fictional **CareWell Hospital**. It is built with plain HTML5, CSS3, Tailwind CSS and vanilla JavaScript — no React, Vue, Angular, Svelte, TypeScript, backend framework, database or server-side application.

> **Fictional demonstration.** CareWell Hospital, its clinicians, patients, testimonials, statistics, opening hours and contact details are invented for this frontend project. Nothing here is medical advice, and the forms do not create real appointments or send data anywhere.

## Quick start

### Option 1 — VS Code Live Server (recommended)

1. Open the `carewell-hospital` folder in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

### Option 2 — npm static server

```bash
npm install
npm run serve
```

Open <http://localhost:4173>. Query-string links such as `doctor-details.html?doctor=amara-okafor` work with this server.

> Use a static server rather than opening the HTML files directly with `file://`. Shared header/footer components are loaded with `fetch()`, which browsers block for `file://` requests.

### Rebuilding the stylesheet

The compiled stylesheet is committed at `assets/css/custom.css`, so the site runs without a build step. After editing HTML classes or `assets/css/input.css`:

```bash
npm install
npm run build:css
```

For development, use `npm run watch:css` to rebuild on save.

## Pages

| Page | File | Highlights |
| --- | --- | --- |
| Home | `index.html` | Hero, quick-care routing, statistics, specialties, clinicians, facilities, reflection carousel, journal previews, location |
| About | `about.html` | Story, values, timeline, facilities, quality and safety, community |
| Services | `services.html` | Searchable/filterable directory of 18 services, emergency and diagnostics sections |
| Specialties | `specialties.html` | Ten specialty profiles with cross-links to clinicians and appointment requests |
| Departments | `departments.html` | Seven department guides, sample floor directory |
| Doctors | `doctors.html` | Live search and specialty filters across 10 fictional clinicians |
| Doctor details | `doctor-details.html` | Profile generated from `?doctor=slug`, schedule, expertise, related clinicians, demo booking form |
| Appointment | `appointment.html` | Validated multi-field demo request, specialty/doctor prefill, printable sample summary |
| Patient information | `patient-information.html` | Practical visit, test, surgery, maternity, accessibility, billing and records guidance |
| FAQ | `faq.html` | Live search, 25 questions, single-open accessible accordions |
| Health journal | `blog.html` | Search, category filters, load-more, six-at-a-time listing |
| Journal article | `blog-details.html` | Article generated from `?article=slug`, table of contents, author panel, related reading, copy/print tools |
| Contact | `contact.html` | Validated demo enquiry form, department phone directory, directions and illustrated map |
| Privacy policy | `privacy-policy.html` | Plain-language explanation of the static, non-collecting demo |
| Not found | `404.html` | Branded recovery page with useful links and emergency guidance |

## Project structure

```text
carewell-hospital/
├── *.html                       # 15 pages
├── components/
│   ├── emergency-bar.html       # Shared top bar
│   ├── header.html              # Sticky header, desktop dropdowns, mobile panel
│   └── footer.html              # Shared footer
├── assets/
│   ├── css/
│   │   ├── input.css            # Tailwind source + component layer
│   │   └── custom.css           # Compiled, minified stylesheet
│   ├── fonts/                   # Self-hosted Fraunces and Manrope (WOFF2)
│   ├── images/                  # Brand, hero, doctors, facilities, departments, blog
│   └── js/
│       ├── components.js        # Loads shared components and initialises navigation
│       ├── navigation.js        # Active links, dropdowns, mobile menu and focus trap
│       ├── main.js              # Reveals, counters, accordions, search/filter, forms, carousel, utilities
│       ├── doctors.js           # Doctor data, directory filtering and profile generation
│       ├── appointments.js      # Appointment + doctor booking validation and summaries
│       ├── blog.js              # Article data, journal search/filter and article rendering
│       └── lucide.min.js        # Vendored Lucide icon library
├── config/tailwind.config.js
├── sitemap.xml
├── robots.txt
├── package.json
└── README.md
```

## Interactions and behaviour

- **Shared layout:** `components.js` fetches the emergency bar, header and footer, replaces the placeholders, then initialises active navigation states.
- **Responsive navigation:** desktop dropdowns open on hover and click, close on outside click or `Escape`; the mobile panel traps focus, locks page scroll, supports collapsible submenus and restores focus on close.
- **Search and filters:** doctors support text search across name, specialty, role, expertise and languages; services support category filters and text search; the journal supports category filters, search and load-more; the FAQ supports text search across questions and answers.
- **Doctor profiles:** `doctor-details.html?doctor=amara-okafor` maps the slug to directory data and updates the page title, metadata, breadcrumb and booking form. Unknown slugs fall back to the first clinician rather than showing a dead page.
- **Journal articles:** `blog-details.html?article=heart-habits` renders the matching article, sections, table of contents, author details and related reading.
- **Appointment prefill:** `appointment.html?specialty=cardiology` selects a specialty and limits the doctor list; `appointment.html?doctor=amara-okafor` selects both the clinician and specialty.
- **Forms:** All forms use client-side validation with inline messages, focus management and `aria-invalid`. On success they render an in-browser sample summary, with edit and print controls. **No network request is made and no data is stored.**
- **Other controls:** Accessible accordions, a keyboard-operable reflection carousel, animated statistics, reveal-on-scroll (only when JavaScript is active), a back-to-top button, print styles, and a copy-link button on articles.
- **No-JavaScript fallbacks:** Core pages include `<noscript>` guidance for JavaScript-driven directories and articles.

## Accessibility

- Skip link, semantic landmarks and one `h1` per page.
- Visible focus styles and keyboard support for menus, dropdowns, accordions, filters, carousel and forms.
- ARIA labels, `aria-expanded`, `aria-controls`, `aria-current`, `aria-live` and `aria-invalid` where appropriate.
- Focus trap and focus restoration in the mobile menu; `inert` panels for collapsed content.
- Descriptive alt text for content images; decorative graphics are hidden from assistive technology.
- Colour contrast checked against the navy/teal/sand palette.
- Reduced-motion support disables smooth transitions and reveal animations.
- Form fields have persistent labels; required fields are marked in the label and validated with readable messages.

## SEO and metadata

Each page includes a unique title and description, Open Graph and Twitter metadata, a theme colour, a local SVG favicon, and a canonical-friendly `.html` URL structure. `sitemap.xml` lists the 14 indexable pages; `robots.txt` excludes the `404` page and points to the sitemap. Replace `https://carewell-hospital.example` with the production domain when deploying.

## Responsive testing

Layouts were checked from **320px to 1920px**, with specific pass checks at 320, 375, 425, 768, 1024, 1280, 1440 and 1920 widths. The layout has no horizontal page overflow at 320, 375 or 1440 in automated checks, and all 15 pages load without broken images or missing local pages/anchors.

## Content, images and credits

- All clinical content, people, locations, phone numbers and statistics are fictional sample content for demonstration purposes.
- Images are illustrative generated/stock-style assets created for this fictional project. They are not photographs of real CareWell staff or patients.
- **Fraunces** and **Manrope** are self-hosted Google Fonts licensed under the SIL Open Font License.
- **Lucide** icons are vendored under the ISC License.
- **Tailwind CSS** is licensed under the MIT License.

## Deployment

Upload the contents of `carewell-hospital/` to any static host (Netlify, Vercel static hosting, GitHub Pages, Cloudflare Pages, S3, or a standard web server). Keep the `assets/` folder intact, preserve query strings for `doctor-details.html`, `blog-details.html` and `appointment.html`, and configure the host to serve `404.html` for missing paths.

No environment variables, database or build server are required in production.
