# bee Study

This project now runs on [Vite](https://vitejs.dev/) with React 18 and Redux Toolkit.

## Scripts

- `npm run dev` – start the development server (respects `VITE_PORT`, defaults to 5555).
- `npm run build` – create a production build in `dist/`.
- `npm run preview` – serve the production build locally.
- `npm run test` – execute the Vitest test suite (uses jsdom environment).
- `npm run deploy` – build and publish the app to GitHub Pages (`dist/`).

## Environment Variables

Set variables in a `.env` file using the `VITE_` prefix so they are exposed to the client. Example:

```
VITE_PORT=5555
VITE_API_URL=http://localhost:3333
```

`VITE_API_URL` is consumed via `import.meta.env.VITE_API_URL` for HTTP clients and data fetching utilities.

## Static Assets

Files in `public/` are served as-is by Vite. Reference them with absolute paths (e.g. `/favicon.ico`) from `index.html` or your components.

## Testing

Vitest is configured with Testing Library matchers through `src/setupTests.js`. The test environment runs in jsdom, so DOM APIs are available.
