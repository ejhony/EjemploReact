# Copilot Instructions for Nombre-App

## Project Overview
This is a **Vite + React educational project** for the DSM course (Desarrollo de Software Moderno, Instructor: MTI Jhony). It's a minimal learning setup demonstrating component-based React architecture with Vite's Fast Refresh (HMR).

## Architecture & Component Structure

### Key Component Hierarchy
- **`App.jsx`** (root): Main entry point importing and composing child components
- **`Encabezado.jsx`**: Header section with three internal components:
  - `Logotipo()`: Displays company logo from `assets/Logotipo.png`
  - `Menu()`: Navigation list (Inicio, Acerca de, Productos, Contacto, Sucursales)
  - `Redes()`: Social media links (Facebook, WhatsApp, Instagram, YouTube, LinkedIn)
- **`assets/expresiones.jsx`**: Expression/content section (in-progress, currently contains placeholder structure)

### Entry Point Flow
1. `index.html` → mounts to `#root` div
2. `main.jsx` → renders `<App>` inside `<React.StrictMode>`
3. `App.jsx` → composes `<Encabezado>` and `<Expresiones>` components

## Development Workflow

### Commands
- **`npm run dev`**: Start local dev server with HMR (Vite default: http://localhost:5173)
- **`npm run build`**: Production build output to `/dist`
- **`npm run lint`**: ESLint check (enforces strict rules via `--max-warnings 0`)
- **`npm run preview`**: Preview production build locally

### Key Dependencies
- **React 18.2.0**: With `react-dom` for DOM rendering
- **Vite 5**: Build tool with `@vitejs/plugin-react` using Babel for Fast Refresh
- **ESLint**: Strict linting with React plugin and React Hooks plugin

## Project Patterns & Conventions

### Component Structure
1. **Functional Components**: All components use function declarations (not arrow functions), see `Encabezado.jsx`
2. **Sub-components**: Internal helper components defined within parent file (e.g., `Logotipo()`, `Menu()`, `Redes()` inside `Encabezado.jsx`)
3. **Named Exports**: Use `export default ComponentName` at file end

### Asset Imports
- Static assets (images) imported at top: `import Logo from './assets/Logotipo.png'`
- Vite automatically optimizes asset paths

### Styling (Not Yet Implemented)
- CSS files exist (`App.css`, `index.css`) but are minimal/empty
- Follow React inline CSS or CSS module pattern when adding styles

## Common Tasks

### Adding a New Component
1. Create `.jsx` file in `src/` or `src/assets/`
2. Write functional component with `function ComponentName() { return (...) }`
3. Add `export default ComponentName`
4. Import and use in parent (e.g., `import MyComponent from "./MyComponent"`)

### Adding Images/Assets
1. Place in `src/assets/`
2. Import: `import imageName from './assets/filename.png'`
3. Use in JSX: `<img src={imageName} alt="description" />`

### Running Linting Before Commit
- Always run `npm run lint` to catch violations before pushing
- All warnings fail the build (`--max-warnings 0`), so fix all issues

## Notes for AI Agents
- This is an **educational/tutorial project** — code may be incomplete or intentionally simplified
- `expresiones.jsx` has incomplete state (`const nombre` with no initialization) — understand this is likely intentional for student exercises
- Fast Refresh means components reload without losing state during development — leverage this for rapid iteration
- React Strict Mode enabled (`<React.StrictMode>`) provides development warnings and double-invokes effects
