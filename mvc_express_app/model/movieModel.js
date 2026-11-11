import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },

        director: {
            type: String,
            required: true
        },

        category: {
            type: String,
            required: true
        },

        year: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const Movie = mongoose.model("Movie", movieSchema, "movie");

export default Movie;