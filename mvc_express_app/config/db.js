import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: process.env.DB_NAME
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        res.status(500).json({ message: "MongoDB connection failed", error: error.message });
    }
};

export default connectDB;