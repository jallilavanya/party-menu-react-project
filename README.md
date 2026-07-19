# Party Menu

A responsive React application for browsing a party menu, viewing recipe details, and saving favourite recipes locally.

## Installation

```bash
npm install
```

## Running locally

```bash
npm run dev
```

In a second terminal, start the demo login API:

```bash
npm run server
```

Use `admin@example.com` and `password` to sign in to the included demo API.

## Features

- Protected sign-in flow with loading and error states
- Category, diet, and recipe-name filtering
- Recipe detail view with ingredients
- Local Storage saved recipes and removal controls
- Responsive layouts for desktop and mobile

## Technologies

- React 19
- React Router DOM 7
- Vite 6
- Plain CSS

## Folder structure

```text
src/
├── components/   Reusable interface pieces
├── context/      Authentication state
├── data/         Menu data
├── pages/        Route pages
├── routes/       Route protection
├── services/     API-facing code
├── styles/       Global styles
└── utils/        Menu helpers
```
