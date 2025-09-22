// backend/server.js
import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(cors()); // allow your frontend domain
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));


// Use the product API
app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
