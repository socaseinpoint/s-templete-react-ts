
# Project Structure
## The project is organized as follows:

src/
├── assets/          # Static assets like images, fonts, or other resources
├── components/      # Reusable UI components
│   └── ui/          # Specific folder for UI-related components
├── config/          # Application-wide configuration and constants
├── hooks/           # Custom React hooks
├── routes/          # Application routes and route-based logic
├── services/        # Service-related logic and external integrations
│   ├── api/         # API-related services for network requests
│   ├── i18n/        # Internationalization (i18n) utilities and configurations
│   ├── providers/   # Context providers or third-party service providers
│   └── state/       # Application state management services
├── types/           # TypeScript types and interfaces
├── utils/           # Utility functions and helpers
├── App.tsx          # Main application component
├── index.css        # Global CSS styles
├── main.tsx         # Entry point of the application
├── vite-env.d.ts    # Type definitions for Vite


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
