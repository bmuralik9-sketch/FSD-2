# Template Engine EJS App

A server-rendered product CRUD application built with Express, EJS, and MongoDB using Mongoose.

## Features

- View all products and individual product details
- Add, edit, and delete products
- Render pages and forms with EJS templates
- Store product data in MongoDB

## Requirements

- Node.js and npm
- A MongoDB server, local or hosted

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env` file in the project root and configure the application:

   ```env
   PORT=9500
   MONGO_URI=mongodb://127.0.0.1:27017
   DB_NAME=productsDB
   ```

   `MONGO_URI` is the MongoDB connection URI, and `DB_NAME` is the database name.

3. Start the application:

   ```bash
   npm start
   ```

   For development with Node's watch mode:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:9500](http://localhost:9500) in your browser. If you set a different `PORT`, use that port instead.

## Application Routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/` | Display all products |
| `GET` | `/product-form` | Display the form for a new product |
| `POST` | `/add-product` | Create a product |
| `GET` | `/product/:id` | Display one product |
| `GET` | `/product-form/:id` | Display the form to edit a product |
| `POST` | `/update-product/:id` | Update a product |
| `GET` | `/delete-product/:id` | Delete a product |

Products have a required `name`, `category`, and `price`; `description` is optional.
