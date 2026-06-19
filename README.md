# Vishnu Vamsi Portfolio (v2)

A sidebar-layout developer portfolio with light/dark theme toggle, built with React + Vite and plain CSS.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build for production

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

## Structure

- `src/App.jsx` — assembles all sections, tracks active section for sidebar nav highlighting
- `src/ThemeContext.jsx` — light/dark theme state, toggled via the sidebar button
- `src/components/` — Sidebar, Hero, About, Skills, Projects, Education, Contact, Footer
- `public/Jannu_Vishnu_Vamsi_Resume.pdf` — wired to the "Download résumé" button in the sidebar

## Design

- Fixed left sidebar: profile, section nav, theme toggle, résumé download — all always visible
- Light theme: warm paper background, dark ink text
- Dark theme: deep slate background, soft off-white text
- Shared teal accent (`#2DD4A8`) across both themes for consistency
- Type: Sora (headings) + Inter (body)
- Toggle switches instantly via a `data-theme` attribute on `<html>`, no flash/reload

## To edit later

- **Projects**: `src/components/Projects.jsx` — edit the `PROJECTS` array
- **Skills**: `src/components/Skills.jsx` — edit `SKILL_GROUPS`
- **Education**: `src/components/Education.jsx` — edit `EDUCATION`. Replace `"Your College Name"` with your actual university name.
- **Contact info**: `src/components/Contact.jsx`
- **Colors**: all theme colors are CSS variables in `src/index.css` under `[data-theme='dark']` and `[data-theme='light']`
