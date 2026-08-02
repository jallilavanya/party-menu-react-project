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

## Authentication

This app uses the serverless API for authentication:

**Endpoint:** `POST https://serverless-api-teal.vercel.app/api/auth/signin`

**Request Body:**
```json
{
  "email": "admin@example.com",
  "password": "admin123"
}
```

**Response:**
- On success: Stores `party_menu_token` and `party_menu_user` in localStorage
- On failure: Displays the API error message in the sign-in form

## Local Storage

The app uses the following localStorage keys:
- `party_menu_token` - Authentication token
- `party_menu_user` - Authenticated user info
- `party_menu_saved_recipes` - Array of saved recipes

## Features

- Protected sign-in flow with loading and error states
- Category, diet, and recipe-name filtering (search on button click)
- Recipe detail view with ingredients and save functionality
- Local Storage saved recipes and removal controls
- Saved recipes count badge in header
- Responsive layouts for desktop and mobile
- Accessible UI with ARIA labels and semantic HTML

## Routes

- `/signin` - Public sign-in page
- `/` - PROTECTED menu page (requires `party_menu_token` in localStorage)
- `/menu/:id` - Public recipe detail page (public)
- `/saved-recipes` - Public saved recipes page (public)
- `*` - Public 404 page (displays different CTA based on auth state)

## Technologies

- React 19
- React Router DOM 7
- Vite 6
- Plain CSS

## Folder structure

```text
src/
├── components/   Reusable interface pieces
├── context/      Authentication and saved recipes state
├── data/         Menu data
├── pages/        Route pages
├── routes/       Route protection
├── services/     API-facing code
├── styles/       Global styles
└── utils/        Menu and recipe helpers
```

