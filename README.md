# Abderrahmane EL FAJRI — Multilingual React Portfolio

> Modern, high-performance portfolio website built with **React 18**, **Vite**, and **React Router DOM**. Featuring full multilingual internationalization (**English**, **Français**, and **العربية** with native RTL layout), verified CV credentials, live client showcase projects, and responsive mobile architecture.

---

## 🌍 Multilingual Support (i18n)

Switch seamlessly between three languages via the top navigation switcher:
1. **English (EN)** — Default international tech positioning.
2. **Français (FR)** — Tailored for French and Moroccan commercial/enterprise partners.
3. **العربية (AR)** — Classical professional Arabic with native **RTL (Right-to-Left)** layout flipping, mirrored timelines, and custom typography.
- Preferences are automatically persisted across visits using `localStorage`.

---

## 🚀 Quick Start

### 1. Development Mode
Run the local development server with hot-reload:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
Compile optimized static production assets into `dist/`:
```bash
npm run build
```

### 3. Local Production Preview
Test the production build locally:
```bash
npm run preview
```

---

## 📁 Project Structure

```
PORTFOLIO/
├── public/                 # Static assets (hay.jpeg profile picture)
├── src/
│   ├── assets/             # Images & static assets
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Sticky navbar with mobile hamburger drawer
│   │   ├── Footer.jsx      # Unified footer with social links
│   │   └── Typewriter.jsx  # Dynamic role typing animation
│   ├── pages/              # Routed pages
│   │   ├── Home.jsx        # Hero intro, bio, highlights, CTAs
│   │   ├── Services.jsx    # Build & Grow services + 7-step process
│   │   ├── Skills.jsx      # 4 categorized skill grids with progress bars
│   │   ├── Education.jsx   # DEUG, OFPPT & certifications
│   │   ├── Experience.jsx  # MAMO TRADE PFE, web apps & admin roles
│   │   ├── Projects.jsx    # Artizan, Solva, GIDAPRINT, filters
│   │   └── Contact.jsx     # WhatsApp direct card & interactive form
│   ├── App.jsx             # HashRouter setup & route definitions
│   ├── index.css           # Responsive design system & media queries
│   └── main.jsx            # React root mounting
├── html-version/           # Complete backup of the standalone vanilla HTML version
├── dist/                   # Production-ready build output
├── package.json
└── vite.config.js
```

---

## 🌐 Deployment (Vercel, Netlify, GitHub Pages)

- **Vercel / Netlify:** Connect your GitHub repository. The build command is `npm run build` and output directory is `dist`.
- **GitHub Pages:** Deploy directly from `dist/` or using the `gh-pages` package. `HashRouter` is pre-configured to guarantee zero 404 errors on static hosting.
