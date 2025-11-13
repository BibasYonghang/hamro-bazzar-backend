import mongoose from "mongoose";
import ProductSchema from "../models/Products.js";
import dotenv from "dotenv";

dotenv.config();

export const products = [
    { name: "Wireless Bluetooth Headphones", category: "Electronics", price: 59.99, image: "https://example.com/images/headphones.jpg", description: "High-quality wireless headphones with noise cancellation and long battery life." },
    { name: "Smartphone 128GB", category: "Electronics", price: 699.99, image: "https://example.com/images/smartphone.jpg", description: "Sleek and powerful smartphone with a high-resolution camera and fast processor." },
    { name: "Gaming Laptop", category: "Electronics", price: 1299.99, image: "https://example.com/images/laptop.jpg", description: "High-performance gaming laptop with powerful GPU and fast SSD storage." },
    { name: "Smartwatch Series 7", category: "Electronics", price: 399.99, image: "https://example.com/images/smartwatch.jpg", description: "Track your fitness and notifications with this sleek smartwatch." },
    { name: "4K LED TV 55 inch", category: "Electronics", price: 499.99, image: "https://example.com/images/tv.jpg", description: "Ultra HD 4K smart TV with vivid colors and multiple streaming apps." },
    { name: "Wireless Mouse", category: "Electronics", price: 25.99, image: "https://example.com/images/mouse.jpg", description: "Ergonomic wireless mouse with adjustable DPI and long battery life." },
    { name: "Mechanical Keyboard", category: "Electronics", price: 89.99, image: "https://example.com/images/keyboard.jpg", description: "RGB backlit mechanical keyboard with tactile feedback." },
    { name: "Bluetooth Speaker", category: "Electronics", price: 59.99, image: "https://example.com/images/speaker.jpg", description: "Portable Bluetooth speaker with deep bass and 12-hour battery life." },
    { name: "Camera DSLR", category: "Electronics", price: 899.99, image: "https://example.com/images/camera.jpg", description: "High-resolution DSLR camera with multiple lenses included." },
    { name: "Tablet 10 inch", category: "Electronics", price: 299.99, image: "https://example.com/images/tablet.jpg", description: "10-inch tablet with HD display, ideal for browsing and media." },
    { name: "Portable Charger 20000mAh", category: "Electronics", price: 39.99, image: "https://example.com/images/powerbank.jpg", description: "High-capacity power bank for charging phones and tablets on the go." },
    { name: "Bluetooth Earbuds", category: "Electronics", price: 39.99, image: "https://example.com/images/earbuds.jpg", description: "Compact wireless earbuds with high-quality sound." },
    { name: "Office Chair", category: "Home Furniture", price: 199.99, image: "https://example.com/images/officechair.jpg", description: "Comfortable ergonomic office chair with adjustable height and back support." },
    { name: "Bookshelf", category: "Home Furniture", price: 149.99, image: "https://example.com/images/bookshelf.jpg", description: "Wooden bookshelf with 5 shelves, perfect for home or office." },
    { name: "Bedside Table", category: "Home Furniture", price: 79.99, image: "https://example.com/images/bedside.jpg", description: "Compact bedside table with drawer and shelf for extra storage." },
    { name: "Hair Dryer", category: "Personal Care", price: 29.99, image: "https://example.com/images/hairdryer.jpg", description: "Compact hair dryer with multiple heat and speed settings." },
    { name: "Electric Toothbrush", category: "Personal Care", price: 49.99, image: "https://example.com/images/toothbrush.jpg", description: "Rechargeable electric toothbrush with multiple brushing modes." },
    { name: "Shampoo Pack 2", category: "Personal Care", price: 14.99, image: "https://example.com/images/shampoo.jpg", description: "Gentle shampoo suitable for all hair types." },
];

export default products;


const productSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_HAMROBAZZAR_SEED)
        await ProductSchema.deleteMany({});
        await ProductSchema.insertMany(products)
        console.log("Electronics Product Seeded to the Databse")
        mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }
}

productSeeder();

