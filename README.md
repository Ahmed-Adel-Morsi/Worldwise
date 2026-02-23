# WorldWise App (Frontend)

React + Vite frontend for the WorldWise project.

## Live Links

- Frontend repo: https://github.com/Ahmed-Adel-Morsi/Worldwise
- Backend repo: https://github.com/Ahmed-Adel-Morsi/worldwise-api
- Live API: https://worldwise-api-9gg8.onrender.com/

## What This App Does

- Provides a protected travel dashboard after login.
- Displays cities on an interactive Leaflet map.
- Lets users click the map to create a city entry.
- Prefills city/country via reverse geocoding.
- Stores and reads city records from the backend API.

## Tech Stack

- React 18
- React Router DOM 6
- Vite
- React Leaflet + Leaflet
- React Datepicker
- ESLint

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview built app
- `npm run lint` — run lint checks
- `npm run deploy` — deploy `dist` to GitHub Pages

## Run Locally

```bash
npm install
npm run dev
```

Open:

- `http://localhost:5173/Worldwise`

## Authentication (Demo)

The app currently uses a frontend-only fake auth flow for protected routes.

- **Email:** `jack@example.com`
- **Password:** `qwerty`

## API Integration

- API base URL is currently set in `src/context/CitiesContext.jsx`:
  - `https://worldwise-api-9gg8.onrender.com`
- Main resource used by the app:
  - `GET /cities`
  - `GET /cities/:id`
  - `POST /cities`
  - `DELETE /cities/:id`

## Deployment Notes

- Vite base is configured as `/Worldwise` in `vite.config.js`.
- Router basename is `/Worldwise` in `src/App.jsx`.
- This matches GitHub Pages hosting under the repository path.

## Credits

- Inspired by the WorldWise project concept from Jonas Schmedtmann's React course.
