import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Movie API server is running"
    });
});

// Movie API routes
app.use("/api/v1/movie", movieRoutes);

// Start the server after connecting to MongoDB
const startServer = async () => {
    await connectDB();

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
};

startServer();