import mongoose from "mongoose";
import ProductSchema from "../models/Products.js";
import dotenv from "dotenv";

dotenv.config();

export const homeFurnitureSeed = [
    { name: "Office Chair", category: "Home Furniture", price: 199.99, image: "https://example.com/images/officechair.jpg", description: "Comfortable ergonomic office chair with adjustable height and back support." },
    { name: "Bookshelf", category: "Home Furniture", price: 149.99, image: "https://example.com/images/bookshelf.jpg", description: "Wooden bookshelf with 5 shelves, perfect for home or office." },
    { name: "Bedside Table", category: "Home Furniture", price: 79.99, image: "https://example.com/images/bedside.jpg", description: "Compact bedside table with drawer and shelf for extra storage." },
];

const productSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_HOME_FURNITURE_SEED);
        await ProductSchema.deleteMany({});
        await ProductSchema.insertMany(homeFurnitureSeed)
        console.log("Home Furniture Products Seede")
        mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }

}

productSeeder()