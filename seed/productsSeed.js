import mongoose from "mongoose";
import Product from "../models/Products.js";
import dotenv from "dotenv";

dotenv.config();

const productsSeed = [
    {
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 59.99,
        image: "https://example.com/images/headphones.jpg",
        description: "High-quality wireless headphones with noise cancellation and long battery life."
    },
    {
        name: "Smartphone 128GB",
        category: "Electronics",
        price: 699.99,
        image: "https://example.com/images/smartphone.jpg",
        description: "Sleek and powerful smartphone with a high-resolution camera and fast processor."
    },
    {
        name: "Gaming Laptop",
        category: "Electronics",
        price: 1299.99,
        image: "https://example.com/images/laptop.jpg",
        description: "High-performance gaming laptop with powerful GPU and fast SSD storage."
    },
    {
        name: "Smartwatch Series 7",
        category: "Electronics",
        price: 399.99,
        image: "https://example.com/images/smartwatch.jpg",
        description: "Track your fitness and notifications with this sleek smartwatch."
    },
    {
        name: "4K LED TV 55 inch",
        category: "Electronics",
        price: 499.99,
        image: "https://example.com/images/tv.jpg",
        description: "Ultra HD 4K smart TV with vivid colors and multiple streaming apps."
    },
    {
        name: "Wireless Mouse",
        category: "Electronics",
        price: 25.99,
        image: "https://example.com/images/mouse.jpg",
        description: "Ergonomic wireless mouse with adjustable DPI and long battery life."
    },
    {
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 89.99,
        image: "https://example.com/images/keyboard.jpg",
        description: "RGB backlit mechanical keyboard with tactile feedback."
    },
    {
        name: "Running Shoes",
        category: "Footwear",
        price: 89.99,
        image: "https://example.com/images/shoes.jpg",
        description: "Comfortable and lightweight running shoes for everyday workouts."
    },
    {
        name: "Casual Sneakers",
        category: "Footwear",
        price: 69.99,
        image: "https://example.com/images/sneakers.jpg",
        description: "Stylish sneakers for casual wear and urban fashion."
    },
    {
        name: "Leather Boots",
        category: "Footwear",
        price: 120.00,
        image: "https://example.com/images/boots.jpg",
        description: "Durable leather boots perfect for winter and outdoor activities."
    },
    {
        name: "Yoga Mat",
        category: "Fitness",
        price: 24.99,
        image: "https://example.com/images/yogamat.jpg",
        description: "Non-slip yoga mat with extra cushioning for a comfortable workout."
    },
    {
        name: "Dumbbell Set 20kg",
        category: "Fitness",
        price: 79.99,
        image: "https://example.com/images/dumbbells.jpg",
        description: "Adjustable dumbbell set for home workouts."
    },
    {
        name: "Resistance Bands",
        category: "Fitness",
        price: 19.99,
        image: "https://example.com/images/resistancebands.jpg",
        description: "Set of 5 resistance bands for strength training and stretching."
    },
    {
        name: "Treadmill",
        category: "Fitness",
        price: 599.99,
        image: "https://example.com/images/treadmill.jpg",
        description: "Foldable treadmill with speed control and heart rate monitor."
    },
    {
        name: "Leather Wallet",
        category: "Accessories",
        price: 29.99,
        image: "https://example.com/images/wallet.jpg",
        description: "Durable leather wallet with multiple card slots and a slim design."
    },
    {
        name: "Backpack",
        category: "Accessories",
        price: 49.99,
        image: "https://example.com/images/backpack.jpg",
        description: "Stylish and durable backpack with multiple compartments for everyday use."
    },
    {
        name: "Sunglasses",
        category: "Accessories",
        price: 19.99,
        image: "https://example.com/images/sunglasses.jpg",
        description: "UV-protected stylish sunglasses."
    },
    {
        name: "Wristwatch",
        category: "Accessories",
        price: 149.99,
        image: "https://example.com/images/watch.jpg",
        description: "Elegant wristwatch with stainless steel strap and water-resistant design."
    },
    {
        name: "Desk Lamp",
        category: "Home Decor",
        price: 39.99,
        image: "https://example.com/images/desklamp.jpg",
        description: "LED desk lamp with adjustable brightness and flexible neck."
    },
    {
        name: "Coffee Maker",
        category: "Home Appliances",
        price: 119.99,
        image: "https://example.com/images/coffeemaker.jpg",
        description: "Automatic coffee maker with programmable settings and easy cleaning."
    },
    {
        name: "Microwave Oven",
        category: "Home Appliances",
        price: 249.99,
        image: "https://example.com/images/microwave.jpg",
        description: "Compact microwave with multiple cooking modes."
    },
    {
        name: "Electric Kettle",
        category: "Home Appliances",
        price: 39.99,
        image: "https://example.com/images/kettle.jpg",
        description: "Stainless steel electric kettle with auto shut-off."
    },
    {
        name: "Water Bottle",
        category: "Fitness",
        price: 14.99,
        image: "https://example.com/images/waterbottle.jpg",
        description: "Stainless steel water bottle, keeps your drink cold or hot for hours."
    },
    {
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 59.99,
        image: "https://example.com/images/speaker.jpg",
        description: "Portable Bluetooth speaker with deep bass and 12-hour battery life."
    },
    {
        name: "Camera DSLR",
        category: "Electronics",
        price: 899.99,
        image: "https://example.com/images/camera.jpg",
        description: "High-resolution DSLR camera with multiple lenses included."
    },
    {
        name: "Men's Jacket",
        category: "Fashion",
        price: 79.99,
        image: "https://example.com/images/mensjacket.jpg",
        description: "Stylish winter jacket made with warm and durable material."
    },
    {
        name: "Women's Dress",
        category: "Fashion",
        price: 59.99,
        image: "https://example.com/images/womensdress.jpg",
        description: "Elegant evening dress made with high-quality fabric."
    },
    {
        name: "Jeans",
        category: "Fashion",
        price: 49.99,
        image: "https://example.com/images/jeans.jpg",
        description: "Comfortable and durable denim jeans for everyday wear."
    },
    {
        name: "T-shirt Pack of 3",
        category: "Fashion",
        price: 29.99,
        image: "https://example.com/images/tshirt.jpg",
        description: "Cotton t-shirts in assorted colors, perfect for casual wear."
    },
    {
        name: "Tablet 10 inch",
        category: "Electronics",
        price: 299.99,
        image: "https://example.com/images/tablet.jpg",
        description: "10-inch tablet with HD display, ideal for browsing and media."
    },
    {
        name: "Portable Charger 20000mAh",
        category: "Electronics",
        price: 39.99,
        image: "https://example.com/images/powerbank.jpg",
        description: "High-capacity power bank for charging phones and tablets on the go."
    },
    {
        name: "Laptop Stand",
        category: "Accessories",
        price: 24.99,
        image: "https://example.com/images/laptopstand.jpg",
        description: "Ergonomic laptop stand to improve posture and reduce neck strain."
    },
    {
        name: "Office Chair",
        category: "Home Furniture",
        price: 199.99,
        image: "https://example.com/images/officechair.jpg",
        description: "Comfortable ergonomic office chair with adjustable height and back support."
    },
    {
        name: "Bookshelf",
        category: "Home Furniture",
        price: 149.99,
        image: "https://example.com/images/bookshelf.jpg",
        description: "Wooden bookshelf with 5 shelves, perfect for home or office."
    },
    {
        name: "Bedside Table",
        category: "Home Furniture",
        price: 79.99,
        image: "https://example.com/images/bedside.jpg",
        description: "Compact bedside table with drawer and shelf for extra storage."
    },
    {
        name: "Air Conditioner 1.5 Ton",
        category: "Home Appliances",
        price: 499.99,
        image: "https://example.com/images/ac.jpg",
        description: "Energy-efficient AC with fast cooling and remote control."
    },
    {
        name: "Fan 16 inch",
        category: "Home Appliances",
        price: 34.99,
        image: "https://example.com/images/fan.jpg",
        description: "High-speed table fan with adjustable tilt and quiet operation."
    },
    {
        name: "Hair Dryer",
        category: "Personal Care",
        price: 29.99,
        image: "https://example.com/images/hairdryer.jpg",
        description: "Compact hair dryer with multiple heat and speed settings."
    },
    {
        name: "Electric Toothbrush",
        category: "Personal Care",
        price: 49.99,
        image: "https://example.com/images/toothbrush.jpg",
        description: "Rechargeable electric toothbrush with multiple brushing modes."
    },
    {
        name: "Shampoo Pack 2",
        category: "Personal Care",
        price: 14.99,
        image: "https://example.com/images/shampoo.jpg",
        description: "Gentle shampoo suitable for all hair types."
    },
    {
        name: "Gaming Chair",
        category: "Furniture",
        price: 249.99,
        image: "https://example.com/images/gamingchair.jpg",
        description: "Ergonomic chair designed for long gaming sessions."
    },
    {
        name: "LED Strip Lights",
        category: "Home Decor",
        price: 19.99,
        image: "https://example.com/images/ledstrip.jpg",
        description: "Colorful LED strip lights with remote control for ambiance."
    },
    {
        name: "Wall Art Painting",
        category: "Home Decor",
        price: 49.99,
        image: "https://example.com/images/wallart.jpg",
        description: "Beautiful canvas painting to decorate your living space."
    },
    {
        name: "Bluetooth Earbuds",
        category: "Electronics",
        price: 39.99,
        image: "https://example.com/images/earbuds.jpg",
        description: "Compact wireless earbuds with high-quality sound."
    },
    {
        name: "Tablet Stand",
        category: "Accessories",
        price: 14.99,
        image: "https://example.com/images/tabletstand.jpg",
        description: "Adjustable stand for tablets and smartphones."
    },
    {
        name: "Cookware Set 10 pcs",
        category: "Home Appliances",
        price: 129.99,
        image: "https://example.com/images/cookware.jpg",
        description: "Durable cookware set for all your cooking needs."
    }
];

export default productsSeed;


const productSeeder = async () => {
    try {
        await mongoose.connect(process.env.MONGO_PRODUCT_SEED_URL)
        await Product.deleteMany({});
        await Product.insertMany(productsSeed)
        console.log("Product Seeded to the Databse")
        mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }
}

productSeeder();

