# Borys Lomazov — Personal Website

Personal website and digital business card of **Borys Lomazov**, focused on Data Science, applied research, and selected scientific work.

The website is available in **English and German** and is built as a lightweight static site with Astro.

**Live:** https://blomazov.github.io

## Overview

The website provides a concise professional profile including:

- Profile and academic background
- Research and scientific publications
- Data Science, Machine Learning, ML Engineering, and research expertise
- Downloadable German résumé and English CV
- Contact information, LinkedIn, and ORCID

The site is intentionally kept compact and does not reproduce the full contents of the CV.

## Tech Stack

- [Astro](https://astro.build/)
- TypeScript
- Plain CSS
- GitHub Pages
- GitHub Actions

No client-side framework or CSS framework is used.

## Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── documents/
│   │   ├── cv.pdf
│   │   └── lebenslauf.pdf
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── logo2.png
│   │   └── profilbild.png
│   ├── components/
│   │   └── HomePage.astro
│   ├── data/
│   │   ├── content.ts
│   │   └── site.ts
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── de/
│   │   │   └── index.astro
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Local Development

The project requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

Astro starts the local development server at:

```text
http://localhost:4321
```

Create a production build with:

```bash
npm run build
```

Preview the production build locally with:

```bash
npm run preview
```

## Content Management

Most website content is separated from the presentation layer.

- `src/data/content.ts` contains the English and German website content.
- `src/data/site.ts` contains shared external links, document paths, ORCID information, and publication URLs.
- `src/components/HomePage.astro` renders the main page structure.
- `src/styles/global.css` contains the responsive visual design.

Publication URLs are maintained centrally in `site.ts`. If a DOI becomes available, it only needs to be added there.

## Internationalization

English is the default version:

```text
/
```

The German version is available at:

```text
/de/
```

Both versions use the same Astro component structure while their content is maintained separately.

## Deployment

The website is hosted with **GitHub Pages**.

Every push to the `main` branch triggers the GitHub Actions deployment workflow and publishes the latest production build.

```bash
git add .
git commit -m "Update website"
git push
```

## Documents

Public CV files are stored under `public/documents/`.

Academic records, employment references, and other personal documents are intentionally not published on the website and are available separately when required.

## License

The website contains personal content, research descriptions, documents, photographs, and branding belonging to Borys Lomazov.

Unless explicitly stated otherwise, no permission is granted to reuse personal content or assets.
