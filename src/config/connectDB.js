import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined. Check backend/.env.development or NODE_ENV.");
    }

    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error while connecting to DB:", error);
    throw error;
  }
};

export default connectDB;
