# Jobman Global

The site uses React components to generate 11 standalone HTML pages. The build preserves the existing page URLs, CSS cascade, metadata, browser scripts, and public asset paths.

## Run locally

Use Node.js 20 or newer and Python 3.

```sh
npm ci
npm run build
python3 -m http.server 8000 --bind 127.0.0.1 --directory dist
```

Open [http://localhost:8000](http://localhost:8000). After editing source files, rerun `npm run build` and refresh the browser.

For deployment, run `npm ci` and `npm run build`, then publish `dist/` as the static site root. The build produces `index.html` and each existing `.html` route. Request-time rendering and SPA rewrite rules are unnecessary.

## Source layout

- `src/pages/` contains one JSX page per public HTML route.
- `src/components/` contains the shared header and footer. The footer takes page-specific contact details and optional blocks.
- `src/styles/`, `src/metadata/`, and `src/behavior/` contain each page’s CSS, structured data, and existing browser scripts. The build inlines them in their original order.
- `public/` contains assets and browser files copied to the site root with their original paths. Edit the original sources and rebuild to update `dist/`.

## What the migration gives us

- **One place to update shared navigation and footer content.** A JSX change to either component propagates to every page, reducing repetitive edits and inconsistent links.
- **Reusable components for future pages.** New pages can compose the same navigation and footer while keeping their own content, metadata, and styling. Additional repeated sections can be extracted as the site evolves.
- **A repeatable static build.** The dependency lockfile and build command generate a complete deployment directory. Each route still serves full HTML, including page metadata and structured data.
- **React with zero client runtime added.** React runs during the build. Existing scripts continue to power navigation, animations, the assistant, and email drafts in the browser.
