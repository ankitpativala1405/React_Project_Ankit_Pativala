# Cloudinary CRUD (React + Vite + Express)

## Setup

1) Create a Cloudinary account and an unsigned upload preset.

2) Create a `.env` file in project root with:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=4000
```

3) Optionally create `.env.local` for Vite with:

```
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UNSIGNED_PRESET=your_unsigned_preset
VITE_CLOUDINARY_FOLDER=optional/folder
```

## Run

Install deps and start both servers:

```
npm install
npm run dev
```

Frontend: `http://localhost:5173` → proxies `/api` to `http://localhost:4000`.

## Features

- Upload (unsigned preset via direct POST to Cloudinary)
- List assets (Admin API via backend)
- Rename asset (backend)
- Delete asset (backend)


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
