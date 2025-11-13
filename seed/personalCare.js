import mongoose from "mongoose";
import ProductSchema from "../models/Products.js";
import dotenv from "dotenv";

dotenv.config();

export const personalCareSeed = [
    { name: "Hair Dryer", category: "Personal Care", price: 29.99, image: "https://example.com/images/hairdryer.jpg", description: "Compact hair dryer with multiple heat and speed settings." },
    { name: "Electric Toothbrush", category: "Personal Care", price: 49.99, image: "https://example.com/images/toothbrush.jpg", description: "Rechargeable electric toothbrush with multiple brushing modes." },
    { name: "Shampoo Pack 2", category: "Personal Care", price: 14.99, image: "https://example.com/images/shampoo.jpg", description: "Gentle shampoo suitable for all hair types." },
];

const productSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_PERSONAL_CARE_SEED);
        await ProductSchema.deleteMany({});
        await ProductSchema.insertMany(personalCareSeed)
        console.log("Home Furniture Products Seede")
        mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }

}

productSeeder()