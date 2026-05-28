import mongoose from "mongoose";
import dotenv from "dotenv";
import products from "../src/data/products.js";
import ProductSchema from "../src/models/Products.model.js";

dotenv.config({ path: ".env.development" });

const seedProductsToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    await ProductSchema.deleteMany({});
    console.log("Old products cleared");

    const insertedProducts = await ProductSchema.insertMany(products);

    console.log(`Inserted ${insertedProducts.length} products`);

    console.log("MongoDB seeding complete");

    await mongoose.disconnect();
  } catch (error) {
    console.log("Seeder Error:", error.message);
  }
};

seedProductsToMongo();
