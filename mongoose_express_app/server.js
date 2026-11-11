import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express()
app.use(express.json());
const port = process.env.PORT||8000;
const dburl = process.env.MONGO_URL;
const dbname = process.env.DB_NAME;

//connect to mongodb
mongoose.connect(dburl, {dbName: dbname})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("connection failed:", err);
  });
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    director: { type: String},
    category: { type: String, required: true },
    year: { type: Number, required: true }
});
const Movie = mongoose.model('Movie', movieSchema, 'movie');

//create a new movie
app.post("/api/v1/movie",(req,res)=>{
    const readMovie = req.body;
    Movie.create(readMovie)
        .then((result)=>{
            res.status(200).json({message:"Movie created successfully", data:result});
        })
        .catch((err)=>{
            res.status(500).json({message:"Failed to create movie"});
        });
});

//GET - Read all data /Read Movies by category
app.get("/api/v1/movie",(req,res)=>{
    const {category} = req.query;
    let query = category ? {category}:{};
    Movie.find(query).then((result)=>{
        res.status(200).json({message:"Movies fetched successfully", data:result});
    }).catch((err)=>{
        res.status(500).json({message:"Problem in fetching movies"});
    });
});

//GET - Read movie by ID
app.get("/api/v1/movie/:id",(req,res)=>{
    const {id} = req.params;
    Movie.findById(id).then((result)=>{
        res.status(200).json({message:"Movie details fetched successfully",data:result});
    }).catch((err)=>{
        res.status(500).json({message:"Problem in fetching movie details"});
    });
});

//PUT - Update movie by ID
app.put("/api/v1/movie/:id",(req,res)=>{
    const {id} = req.params;
    const updatedMovie = req.body;
    Movie.findByIdAndUpdate(id, updatedMovie, { new: true }).then((result)=>{
        if(result){
            res.status(200).json({message:"Movie updated successfully", data:result});
        } else {
            res.status(404).json({message:"Movie not found"});
        }
    }).catch((err)=>{
        res.status(500).json({message:"Problem in updating movie"});
    });
});

//DELETE - Delete movie by ID
app.delete("/api/v1/movie/:id",(req,res)=>{
    const {id} = req.params;
    Movie.findByIdAndDelete(id).then((result)=>{
        if(result){
            res.status(200).json({message:"Movie deleted successfully", data:result});
        } else {
            res.status(404).json({message:"Movie not found"});
        }
    }).catch((err)=>{
        res.status(500).json({message:"Problem in deleting movie"});
    });
});

//Test Route
app.get("/",(req,res)=>{
    res.status(200).json({message:"Movie APi server running"});
});

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})