import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Change MONGODB_URI to MONGO_URI
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: process.env.DB_NAME,
    });
    console.log(`MongoDB connected to database: ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
