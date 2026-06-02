import "./config/env.js";

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import responseTime from "response-time";
import compression from "compression";
import hpp from "hpp";




// Routes
import electronicsRoutes from "./routes/electronics.routes.js";
import homeFurnitureRoutes from "./routes/homeFurniture.routes.js";
import personalCareRoutes from "./routes/personalCare.routes.js";
import gamingRoutes from "./routes/gaming.routes.js";
import featuredProductsRoutes from "./routes/featuredProducts.routes.js";
import offeredProductsRoutes from "./routes/offeredProducts.routes.js";
import categoryElectronicsRoutes from "./routes/category-products-routes/elctronics.routes.js";
import categoryGamingRoutes from "./routes/category-products-routes/gaming.routes.js";
import categoryHomeFurnitureRoutes from "./routes/category-products-routes/homeFurniture.routes.js";
import categoryPersonalCareRoutes from "./routes/category-products-routes/personalCare.routes.js";
import allProductsRoutes from "./routes/allProducts.routes.js";
import orderRoutes from "./routes/payments-routes/order.routes.js";
import aiRoutes from "./routes/ai.routes.js";
import connectDB from "./config/connectDB.js";

const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;
const frontend = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: frontend,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

app.use(helmet());
app.use(compression());
app.use(hpp());
app.use(responseTime())


// Rate limiter (100 requests per 15 min)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 800,
  message: "Too many requests from this IP, please try again later.",
});
app.use(limiter);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test route
app.get("/", (req, res) => res.send("Server is running!"));

// Product Routes
app.use("/api/electronics", electronicsRoutes);
app.use("/api/home-furniture", homeFurnitureRoutes);
app.use("/api/personal-care", personalCareRoutes);
app.use("/api/gaming", gamingRoutes);
app.use("/api/featured-products", featuredProductsRoutes);
app.use("/api/offered-products", offeredProductsRoutes);
app.use("/api/category-electronics", categoryElectronicsRoutes);
app.use("/api/category-gaming", categoryGamingRoutes);
app.use("/api/category-personal-care", categoryPersonalCareRoutes);
app.use("/api/category-home-furniture", categoryHomeFurnitureRoutes);
app.use("/api/all-products", allProductsRoutes);
app.use("/api/products", allProductsRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api", orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong!",
  });
});

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () =>
      console.log(`Server running at http://localhost:${PORT}`),
    );
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
