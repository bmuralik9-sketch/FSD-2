import express from "express";

import {
    createMovie,
    getMovies,
    getMovieById,
    updateMovie,
    deleteMovie
} from "../controller/movieController.js";

const router = express.Router();

// Create a movie
router.post("/", createMovie);

// Get all movies
router.get("/", getMovies);

// Get a movie by ID
router.get("/:id", getMovieById);

// Update a movie by ID
router.put("/:id", updateMovie);

// Delete a movie by ID
router.delete("/:id", deleteMovie);

export default router;