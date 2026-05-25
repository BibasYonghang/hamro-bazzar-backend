import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected Sucessfully");
  } catch (error) {
    console.log("Error while Connecting the DB Says:", error);
  }
};

export default connectDB;
