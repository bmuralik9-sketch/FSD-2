import Movie from "../model/movieModel.js";

// Create a movie
export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(200).json({message:"Movie created successfully", data: movie});
    } catch (error) {
        res.status(500).json({message:"Failed to create movie"});
    }
};

// Get all movies
export const getMovies = async (req, res) => {
    try {
        const {category} = req.query;
        let query = category ? {category}:{};
        Movie.find(query).then((result)=>{
            res.status(200).json({message:"Movies fetched successfully", data:result});
        })
    } catch (error) {
        res.status(500).json({message:"Failed to fetch movies"});
    }
};

// Get a movie by ID
export const getMovieById = async (req, res) => {
    try {
        const {id} = req.params;
        Movie.findById(id).then((result)=>{
            res.status(200).json({message:"Movie details fetched successfully",data:result});
        })
    } catch (error) {
        res.status(500).json({message:"Failed to fetch movie details"});
    }
};

// Update a movie
export const updateMovie = async (req, res) => {
    try {
       const {id} = req.params;
        const updatedMovie = req.body;
        Movie.findByIdAndUpdate(id, updatedMovie, { new: true }).then((result)=>{
            if(result){
                res.status(200).json({message:"Movie updated successfully", data:result});
            } else {
                res.status(404).json({message:"Movie not found"});
            }
        })
    } catch (error) {
        res.status(500).json({message:"Problem in updating movie"});
    }
};

// Delete a movie
export const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Movie.findByIdAndDelete(id);

        if (result) {
            res.status(200).json({ message: "Movie deleted successfully", data: result });
        } else {
            res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Problem in deleting movie" });
    }
};