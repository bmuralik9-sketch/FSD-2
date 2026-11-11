# MERN CRUD App

A simple blog-post CRUD application built with MongoDB, Express, React, and Node.js. The React frontend lets you view, create, and edit posts; the Express API provides create, read, update, and delete operations.

## Project structure

```text
mern-crud-app/
├── backend/   # Express API and MongoDB connection
└── frontend/  # React application built with Vite
```

## Requirements

- Node.js and npm
- A MongoDB instance, either local or hosted

## Setup

### 1. Configure the backend

Open a terminal in `backend/`, install dependencies, and create a `.env` file:

```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017
DB_NAME=mern_crud_app
```

For MongoDB Atlas, set `MONGO_URI` to your Atlas connection URI. Keep credentials and other secrets in `.env`; do not commit that file.

Start the API:

```bash
npm install
npm run dev
```

The API runs at `http://localhost:3000` by default.

### 2. Start the frontend

In a second terminal, open `frontend/`, install dependencies, and start Vite:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite in your browser. The frontend currently sends API requests to `http://localhost:3000`.

## Frontend routes

| Route | Description |
| --- | --- |
| `/` | View the list of posts |
| `/create-post` | Open the form to create a post |
| `/update-post/:id` | Open the form to edit the post with the specified ID |

## API endpoints

All post endpoints use the `/api/v1/posts` path.

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/api/v1/posts` | List all posts |
| `GET` | `/api/v1/posts/:id` | Get a post by ID |
| `POST` | `/api/v1/posts` | Create a post with `title` and `content` |
| `PUT` | `/api/v1/posts/:id` | Update a post |
| `DELETE` | `/api/v1/posts/:id` | Delete a post |

The API expects and returns JSON. Successful responses include the post or posts in a `data` property.

## Available scripts

### Backend (`backend/`)

- `npm run dev` — Start the API with Node's watch mode.
- `npm start` — Start the API.

### Frontend (`frontend/`)

- `npm run dev` — Start the Vite development server.
- `npm run build` — Create a production build in `dist/`.
- `npm run preview` — Preview the production build locally.
- `npm run lint` — Run ESLint.
