# Copilot Instructions for Nombre-App

## Project Overview
**Vite + React educational project** (DSM course, Instructor: MTI Jhony). Minimal learning setup demonstrating component-based React with Vite's Fast Refresh. Focus is on teaching fundamental React patterns and component composition.

## Architecture

### Component Hierarchy
```
App.jsx (root)
├── Encabezado.jsx (colocated: Logotipo, Menu, Redes sub-components)
└── Expresiones.jsx (colocated: Lista sub-component)
```

**Key Files:**
- [App.jsx](src/App.jsx): Composes two main sections + course branding (h1/h2)
- [Encabezado.jsx](src/encabezado.jsx): Header with logo, nav menu, social links (all sub-functions in same file)
- [assets/expresiones.jsx](src/assets/expresiones.jsx): Demonstrates state/expressions and table rendering with `.map()`

### Data & State Patterns
- **No external state management** — components use local `const` for data (see `Expresiones.jsx`: `users` array, `nombre`/`apellido` strings)
- **Lists rendered with `.map()`** — use `key={index}` (note: educational approach, not production best practice)
- **No props drilling** — components are self-contained with hardcoded data

## Development Workflow

### Commands
- `npm run dev`: Start dev server (Vite, http://localhost:5173, Hot Module Replacement enabled)
- `npm run build`: Production build → `/dist`
- `npm run lint`: Strict ESLint check (`--max-warnings 0` means ANY warning fails build)
- `npm run preview`: Serve production build locally

### Tech Stack
- React 18.2.0 + react-dom (browser rendering)
- Vite 5 (@vitejs/plugin-react with Babel for Fast Refresh)
- ESLint 8.55.0 (strict: recommended + react/jsx-runtime + react-hooks)

## Project Patterns & Conventions

### Component Structure
1. **Function Declarations** (not arrow functions) — see all files
2. **Sub-components as Internal Functions** — define helpers in same file (e.g., `Logotipo()`, `Menu()`, `Redes()` in `Encabezado.jsx`)
3. **Single Export per File** — `export default ComponentName` at end
4. **JSX in Expressions** — Inline JSX directly in returns, no JSX fragments needed yet
5. **Table Structure Bug** — `<table>` includes `<th>` inside `<tbody>` (technically invalid; headers should be in `<thead>`)

### Asset Import Pattern
```jsx
import Logo from './assets/Logotipo.png'
import facebook from './assets/redes/facebook.png'
// Use in JSX:
<img src={Logo} alt='Logotipo'/>
```
Vite optimizes paths automatically; no need for `/public/` prefix.

### Data Rendering
- `.map(function(item, index) { return ... })` — used in `Lista()` for rendering rows
- `key={index}` — acceptable for educational/static lists (avoid in production with dynamic data)
- No conditional rendering patterns in use yet

### Styling
- **Active**: [encabezado.css](src/encabezado.css) — contains Flexbox layout for header (logo, menu, social links)
- **Inactive**: [App.css](src/App.css), [index.css](src/index.css) — exist but empty
- Pattern: Import CSS directly in component file (`import './encabezado.css'` at top of component)

## Common Tasks

### Adding a New Component
1. Create `.jsx` file in `src/` or `src/assets/`
2. Define as function: `function ComponentName() { return (...) }`
3. Add internal sub-components if needed (same file)
4. End with `export default ComponentName`
5. Import in parent: `import MyComponent from './MyComponent'` (or `'./assets/MyComponent'`)

### Adding Images/Assets
1. Place in `src/assets/` or `src/assets/redes/` (following existing structure)
2. Import at file top: `import imgName from './assets/filename.png'`
3. Use in JSX: `<img src={imgName} alt="description" />`

### Before Committing
- Always run `npm run lint` — strict config (`--max-warnings 0`) treats warnings as errors
- Fix all ESLint violations before pushing
- Hot Reload enabled during `npm run dev` — use for rapid iteration

## Notes for AI Agents
- **Educational Project** — incomplete/simplified by design; code teaches React fundamentals
- **Intentional Gaps** — no state management, no conditional rendering, minimal CSS — students fill these in
- **Table Structure** — `<th>` in `<tbody>` is a known issue (acceptable for educational purposes)
- **Fast Refresh** — component reloads preserve local state; leverage for iterative development
- **React.StrictMode** — provides extra dev warnings; don't suppress in dev builds
