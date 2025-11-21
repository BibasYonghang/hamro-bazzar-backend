// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";

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
import orderRoutes from "./routes/order.routes.js";

dotenv.config();

const app = express();
const PORT = parseInt(process.env.PORT) || 5000;

// ----------- Middleware -----------

// Enable CORS for your frontend
app.use(
  cors({
    origin: "https://hamro-bazzar-six.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Security headers
app.use(helmet());

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

// Logging (only in development)
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// ----------- Routes -----------

// Test route
app.get("/", (req, res) => res.send("✅ Server is running!"));

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

// Order Routes
app.use("/api/orders", orderRoutes);

// ----------- Global Error Handler -----------
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Something went wrong!",
  });
});

// ----------- MongoDB Connection -----------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected");

    // Start server only after DB connection
    const server = app.listen(PORT, () =>
      console.log(`✅ Server running at http://localhost:${PORT}`)
    );

    // Graceful shutdown
    process.on("SIGINT", async () => {
      console.log("⚠️ SIGINT received, closing server and DB connection...");
      await mongoose.connection.close();
      server.close(() => {
        console.log("✅ Server closed gracefully");
        process.exit(0);
      });
    });

    process.on("SIGTERM", async () => {
      console.log("⚠️ SIGTERM received, closing server and DB connection...");
      await mongoose.connection.close();
      server.close(() => {
        console.log("✅ Server closed gracefully");
        process.exit(0);
      });
    });
  })
  .catch((err) => console.error("❌ MongoDB connection failed", err));
