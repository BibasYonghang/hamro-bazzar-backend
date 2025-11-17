import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import electronicsRoutes from "./routes/electronicsRoutes.js";
import homeFurnitureRoutes from "./routes/homeFurnitureRoutes.js";
import personalCareRoutes from "./routes/personalCareRoutes.js";
import gamingRoutes from "./routes/gamingRoutes.js";
import featuredProducts from "./routes/featuredProductsRoutes.js";
import categoryElectronicsRoutes from "./routes/category-products-routes/elctronicsRoutes.js";
import categoryGamingRoutes from "./routes/category-products-routes/gamingRoutes.js";
import categoryHomeFurnitureRoutes from "./routes/category-products-routes/homeFurnitureRoutes.js";
import categoryPersonalCareRoutes from "./routes/category-products-routes/personalCareRoutes.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT);

app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed", err));

app.get("/", (req, res) => res.send("Hello World!!!biabs!!"));

app.use("/api/electronics", electronicsRoutes);
app.use("/api/home-furniture", homeFurnitureRoutes);
app.use("/api/personal-care", personalCareRoutes);
app.use("/api/gaming", gamingRoutes);
app.use("/api/featured-products", featuredProducts);
app.use("/api/category-electronics", categoryElectronicsRoutes);
app.use("/api/category-gaming", categoryGamingRoutes);
app.use("/api/category-personal-care", categoryPersonalCareRoutes);
app.use("/api/category-home-furniture", categoryHomeFurnitureRoutes);

app.listen(PORT, () =>
  console.log(`✅ Server running at http://localhost:${PORT}`)
);
