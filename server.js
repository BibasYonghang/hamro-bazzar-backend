import express from "express";
import mongoose from "mongoose";
import productsRoutes from "./routes/productsRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();


const app = express();
const PORT = 5000;




app.use(cors());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection failed", err));

app.get("/", (req, res) => res.send("Hello World!!!biabs!!"));
app.use("/api", productsRoutes)

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));
