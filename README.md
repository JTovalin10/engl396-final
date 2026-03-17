# My Favorite Albums — Documentation Site

A documentation site for *My Favorite Albums*, an R Shiny web application for exploring one person's album ratings and annual rankings.

Live site: [jtovalin10.github.io/engl396-final](https://jtovalin10.github.io/engl396-final/)

## About

The documentation covers two audiences:

- **End User** — How to navigate and use each tab in the application. Includes conceptual overviews, step-by-step task walkthroughs with screenshots, a full function reference, and a terminology guide.
- **Developer** — How the codebase is structured, how the core R files work together, and how to run, modify, and extend the application.

## Tech Stack

- React 19 + TypeScript
- Vite 8
- React Router (HashRouter)
- Deployed via GitHub Actions to GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173/engl396-final/`.

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via the workflow in `.github/workflows/deploy.yml`.

## R Shiny App Source

The application this site documents: [github.com/JTovalin10/MyFavoriteAlbums](https://github.com/JTovalin10/MyFavoriteAlbums/tree/8e02ea7aa69cccae1828870a47553ff918251d72)
