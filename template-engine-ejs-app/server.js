import express from "express";
import {
  createProduct,
  readProducts,
  readProductById,
  updateProductForm,
  updateProduct,
  deleteProduct,
  createProductForm,
} from "./controllers/productController.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
await connectDB(process.env.MONGO_URI, process.env.DB_NAME);
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = process.env.PORT || 9999;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

//CRUD operations for products
// Route to render the product form for adding a new product
app.get("/product-form", createProductForm);
// Route to handle adding a new product
app.post("/add-product", createProduct);

// Route to display all products
app.get("/", readProducts);
// Route to display a single product
app.get("/product/:id", readProductById);

// Route to render the product form for editing an existing product
app.get("/product-form/:id", updateProductForm);
// Route to handle updating an existing product
app.post("/add-product/:id", updateProduct);

// Route to handle deleting a product
app.get("/delete-product/:id", deleteProduct);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
