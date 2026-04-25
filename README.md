# 🌍 WorldWise

Keep track of your travel memories on an interactive world map.  
WorldWise lets you pin cities you visited, save trip notes and dates, and browse your trips by cities and countries in a clean, modern dashboard.

🔗 **Live Demo:** [myworldwise-map.vercel.app](https://myworldwise-map.vercel.app/)

---

## ✨ Overview

WorldWise is a React + Vite single-page application focused on travel logging and map-based exploration.  
It combines geolocation, reverse geocoding, and a map UI to make adding trips fast and intuitive.

---

## 🚀 Features

- 🔐 **Protected app area** with demo login flow
- 🗺️ **Interactive Leaflet map** with clickable location selection
- 📍 **Current location support** using browser geolocation
- 🏙️ **City management** (fetch, view details, create, delete)
- 🌐 **Country aggregation** generated from saved cities
- 🧭 **URL-driven map navigation** (`lat`/`lng` query params)
- 📝 **Trip form with date picker** and personal notes
- 🔎 **Automatic reverse geocoding** for city/country suggestions
- ⚡ **Lazy-loaded routes** with full-page loading fallback
- ☁️ **Vercel-ready SPA deployment** with route rewrites

---

## 🧰 Tech Stack

### Core
- `React 18`
- `Vite 4`
- `React Router DOM 6`

### UI & Mapping
- `Leaflet`
- `React Leaflet`
- `React Datepicker`
- `CSS Modules`

### State & Architecture
- React Context API (`CitiesContext`, `FakeAuthContext`)
- `useReducer` for predictable state transitions
- Custom hooks (`useGeolocation`, `useUrlPosition`)

### Tooling
- `ESLint` (`react-app` config)
- `@vitejs/plugin-react`
- `vite-plugin-eslint`

---

## 🏗️ Project Structure

```text
src/
  components/   # Reusable UI and map-related components
  context/      # App-wide state (cities + auth)
  hooks/        # Custom hooks for geolocation and URL params
  pages/        # Route-level pages and app layout
```

---

## 🔌 API & External Services

### Cities API (MockAPI)
Base URL (current):  
`https://69ae0d49b50a169ec880cbc3.mockapi.io`

Used endpoints:
- `GET /cities`
- `GET /cities/:id`
- `POST /cities`
- `DELETE /cities/:id`

### Reverse Geocoding
- `https://api.bigdatacloud.net/data/reverse-geocode-client`

---

## 🔐 Demo Login

Use these credentials to access the protected dashboard:

- **Email:** `jack@example.com`
- **Password:** `qwerty`

---

## 🖥️ Local Development

```bash
npm install
npm run dev
```

App URL (local):  
`http://localhost:5173`

---

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run lint checks

---

## 🌐 Deployment Notes

This project is deployed on Vercel:

- Live URL: [myworldwise-map.vercel.app](https://myworldwise-map.vercel.app/)
- SPA rewrites are configured in `vercel.json` so all routes resolve to `index.html`

---

## 🙌 Credits

Inspired by the WorldWise concept from Jonas Schmedtmann's React course, with custom implementation and deployment setup.
