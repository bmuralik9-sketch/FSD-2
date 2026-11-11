import express from 'express';

const app = express();

// Middleware to parse JSON request body
app.use(express.json());

const products = [];

// POST - Create a new product URL: http://localhost:5000/products
app.post("/products", (req, res) => {
    const newProduct = req.body;

    products.push(newProduct);

    res.status(201).json({
        message: "Product created successfully",
        data: newProduct
    });
});


// GET - Read all products
// URL: http://localhost:5000/products
app.get("/products", (req, res) => {
    res.status(200).json({
        message: "Products fetched successfully",
        data: products
    });
});


// GET - Read product by ID URL: http://localhost:5000/products/:id

app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(
        (p) => p.id === productId
    );

    if (product) {
        res.status(200).json({
            message: "Product details fetched successfully",
            data: product
        });
    } else {
        res.status(404).json({
            message: "Product not found"
        });
    }
});


// PUT - Update product by ID URL: http://localhost:5000/products/:id

app.put("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const updateProduct = req.body;

    const productIndex = products.findIndex(
        (prod) => prod.id === productId
    );

    if (productIndex !== -1) {

        products[productIndex] = {
            ...products[productIndex],
            ...updateProduct
        };

        res.status(200).json({
            message: "Product updated successfully",
            data: products[productIndex]
        });

    } else {

        res.status(404).json({
            message: "Product not found"
        });

    }
});



// DELETE - Delete product by ID URL: http://localhost:5000/products/:id
app.delete("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);

    const productIndex = products.findIndex(
        (prod) => prod.id === productId
    );

    if (productIndex !== -1) {

        const deleteProduct =
            products.splice(productIndex, 1)[0];

        res.status(200).json({
            message: "Product deleted successfully",
            data: deleteProduct
        });

    } else {

        res.status(404).json({
            message: "Product not found"
        });

    }
});



app.listen(5000, () => {
    console.log(
        "Server is running at http://localhost:5000"
    );
});




/*
curl -X POST http://localhost:5000/products -H "Content-Type: application/json" -d "{\"id\":1,\"name\":\"Laptop\",\"price\":55000}"
curl -X POST http://localhost:5000/products -H "Content-Type: application/json" -d "{\"id\":2,\"name\":\"Mobile\",\"price\":25000}"
curl -X POST http://localhost:5000/products -H "Content-Type: application/json" -d "{\"id\":3,\"name\":\"Headphones\",\"price\":2000}"
curl http://localhost:5000/products
curl http://localhost:5000/products/1
curl http://localhost:5000/products/2
curl -X PUT http://localhost:5000/products/1 -H "Content-Type: application/json" -d "{\"name\":\"Gaming Laptop\",\"price\":65000}"
curl -X PUT http://localhost:5000/products/2 -H "Content-Type: application/json" -d "{\"price\":22000}"
curl http://localhost:5000/products/1
curl -X DELETE http://localhost:5000/products/3
curl -X DELETE http://localhost:5000/products/2
curl http://localhost:5000/products
*/