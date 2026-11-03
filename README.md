# Nora Womack — Aspiring Model

An image-forward portfolio for Vancouver-based aspiring model Nora Womack, built with Next.js, TypeScript, and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

The portfolio title, description, and image URLs are managed in `src/data/projects.ts`.
The existing `/work/notes-from-the-coast` URL is retained for the Selected Portraits
gallery so existing links continue to work.

The home and about pages introduce Nora's modeling interests, languages, sports,
and filmmaking background. The copy does not publish her age or school, or claim
professional credits, representation, or worldwide availability.

Contact details are intentionally unpublished. Before adding an inquiry link to
`src/app/contact/page.tsx`, confirm a parent- or guardian-managed address. The
short-film award is mentioned without a category because the specific award
has not been confirmed.

## Commands

```bash
npm run lint
npm run build
```

## Deployment

The site is configured as a static export and deploys to GitHub Pages when
changes are pushed to `main`. GitHub Pages must be enabled with **GitHub
Actions** selected as the source.
