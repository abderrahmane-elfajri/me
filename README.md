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
├── public/                 # Static assets (CV PDF, verified certificates, favicon)
├── src/
│   ├── assets/             # Images & static assets
│   ├── components/         # Reusable React components
│   │   ├── Navbar.jsx      # Sticky navbar with mobile hamburger drawer & CV pill
│   │   ├── Footer.jsx      # Unified footer with social links
│   │   ├── HeroVisual.jsx  # High-tech interactive animated developer visual
│   │   └── Typewriter.jsx  # Dynamic role typing animation
│   ├── context/            # LanguageContext (EN, FR, AR with native RTL)
│   ├── pages/              # Routed pages
│   │   ├── Home.jsx        # Recruiter hero, status ribbon, CV download, CTAs
│   │   ├── Services.jsx    # What I Can Do + 4-phase methodology
│   │   ├── Skills.jsx      # 5 categorized technical skill cards with badges
│   │   ├── Education.jsx   # 5 Degrees & 12 verified certificates with PDF viewer
│   │   ├── Experience.jsx  # Verified professional experience with bulleted tasks
│   │   ├── Projects.jsx    # 5 Projects with interactive Case Study Modals
│   │   └── Contact.jsx     # Google Apps Script integrated form & direct contact
│   ├── translations/       # Full trilingual parity (index.js)
│   ├── App.jsx             # HashRouter setup & route definitions
│   ├── index.css           # Responsive design system & animations
│   └── main.jsx            # React root mounting
├── dist/                   # Production-ready build output
├── package.json
└── vite.config.js
```

---

## 🌐 Deployment (Vercel, Netlify, GitHub Pages)

- **Vercel / Netlify:** Connect your GitHub repository. The build command is `npm run build` and output directory is `dist`.
- **GitHub Pages:** Deploy directly from `dist/` or using the `gh-pages` package. `HashRouter` is pre-configured to guarantee zero 404 errors on static hosting.
