// backend/seeder.js
import mongoose from "mongoose";
import Product from "./models/Product.js";
import products from "./data/products.js"; // your static products.js file
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const seedProducts = async () => {
    try {
        await Product.deleteMany(); // clear old products
        await Product.insertMany(products);
        console.log("Products seeded successfully");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedProducts();
