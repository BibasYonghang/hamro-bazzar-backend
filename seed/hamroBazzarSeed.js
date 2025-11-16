import mongoose from "mongoose";
import ProductSchema from "../models/Products.js";
import dotenv from "dotenv";

dotenv.config();

export const products = [
  {
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    image: "https://example.com/images/headphones.jpg",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
  },
  {
    name: "Smartphone 128GB",
    category: "Electronics",
    price: 699.99,
    image: "https://example.com/images/smartphone.jpg",
    description:
      "Sleek and powerful smartphone with a high-resolution camera and fast processor.",
  },
  {
    name: "Gaming Laptop",
    category: "Electronics",
    price: 1299.99,
    image: "https://example.com/images/laptop.jpg",
    description:
      "High-performance gaming laptop with powerful GPU and fast SSD storage.",
  },
  {
    name: "Smartwatch Series 7",
    category: "Electronics",
    price: 399.99,
    image: "https://example.com/images/smartwatch.jpg",
    description:
      "Track your fitness and notifications with this sleek smartwatch.",
  },
  {
    name: "4K LED TV 55 inch",
    category: "Electronics",
    price: 499.99,
    image: "https://example.com/images/tv.jpg",
    description:
      "Ultra HD 4K smart TV with vivid colors and multiple streaming apps.",
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    image: "https://example.com/images/mouse.jpg",
    description:
      "Ergonomic wireless mouse with adjustable DPI and long battery life.",
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    image: "https://example.com/images/keyboard.jpg",
    description: "RGB backlit mechanical keyboard with tactile feedback.",
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    image: "https://example.com/images/speaker.jpg",
    description:
      "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
  },
  {
    name: "Camera DSLR",
    category: "Electronics",
    price: 899.99,
    image: "https://example.com/images/camera.jpg",
    description: "High-resolution DSLR camera with multiple lenses included.",
  },
  {
    name: "Tablet 10 inch",
    category: "Electronics",
    price: 299.99,
    image: "https://example.com/images/tablet.jpg",
    description:
      "10-inch tablet with HD display, ideal for browsing and media.",
  },
  {
    name: "Portable Charger 20000mAh",
    category: "Electronics",
    price: 39.99,
    image: "https://example.com/images/powerbank.jpg",
    description:
      "High-capacity power bank for charging phones and tablets on the go.",
  },
  {
    name: "Bluetooth Earbuds",
    category: "Electronics",
    price: 39.99,
    image: "https://example.com/images/earbuds.jpg",
    description: "Compact wireless earbuds with high-quality sound.",
  },
  {
    name: "Dining Table Set",
    category: "Home Furniture",
    price: 499.99,
    image: "https://example.com/images/diningtable.jpg",
    description: "Modern 4-seater dining table set with wooden finish.",
  },
  {
    name: "Wardrobe",
    category: "Home Furniture",
    price: 299.99,
    image: "https://example.com/images/wardrobe.jpg",
    description:
      "Spacious double-door wardrobe with hanging space and drawers.",
  },
  {
    name: "Recliner Sofa",
    category: "Home Furniture",
    price: 349.99,
    image: "https://example.com/images/recliner.jpg",
    description: "Comfortable recliner sofa with smooth reclining mechanism.",
  },
  {
    name: "Coffee Table",
    category: "Home Furniture",
    price: 129.99,
    image: "https://example.com/images/coffeetable.jpg",
    description: "Stylish wooden coffee table with storage shelf underneath.",
  },
  {
    name: "TV Stand",
    category: "Home Furniture",
    price: 159.99,
    image: "https://example.com/images/tvstand.jpg",
    description:
      "Modern TV stand with compartments for media devices and decor.",
  },
  {
    name: "Office Chair",
    category: "Home Furniture",
    price: 199.99,
    image: "https://example.com/images/officechair.jpg",
    description:
      "Comfortable ergonomic office chair with adjustable height and back support.",
  },
  {
    name: "Bookshelf",
    category: "Home Furniture",
    price: 149.99,
    image: "https://example.com/images/bookshelf.jpg",
    description: "Wooden bookshelf with 5 shelves, perfect for home or office.",
  },
  {
    name: "Bedside Table",
    category: "Home Furniture",
    price: 79.99,
    image: "https://example.com/images/bedside.jpg",
    description:
      "Compact bedside table with drawer and shelf for extra storage.",
  },
  {
    name: "Hair Dryer",
    category: "Personal Care",
    price: 29.99,
    image: "https://example.com/images/hairdryer.jpg",
    description: "Compact hair dryer with multiple heat and speed settings.",
  },
  {
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 49.99,
    image: "https://example.com/images/toothbrush.jpg",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes.",
  },
  {
    name: "Shampoo Pack 2",
    category: "Personal Care",
    price: 14.99,
    image: "https://example.com/images/shampoo.jpg",
    description: "Gentle shampoo suitable for all hair types.",
  },
  {
    name: "Beard Trimmer",
    category: "Personal Care",
    price: 39.99,
    image: "https://example.com/images/beardtrimmer.jpg",
    description: "Rechargeable beard trimmer with adjustable length settings.",
  },
  {
    name: "Face Steamer",
    category: "Personal Care",
    price: 24.99,
    image: "https://example.com/images/facesteamer.jpg",
    description:
      "Portable facial steamer for deep pore cleansing and hydration.",
  },
  {
    name: "Body Lotion",
    category: "Personal Care",
    price: 12.49,
    image: "https://example.com/images/bodylotion.jpg",
    description: "Moisturizing body lotion with long-lasting hydration.",
  },
  {
    name: "Hair Straightener",
    category: "Personal Care",
    price: 34.99,
    image: "https://example.com/images/hairstraightener.jpg",
    description: "Ceramic hair straightener with fast heating technology.",
  },
  {
    name: "Nail Care Kit",
    category: "Personal Care",
    price: 19.99,
    image: "https://example.com/images/nailcarekit.jpg",
    description: "Complete nail grooming kit with clippers, files, and tools.",
  },
  {
    name: "Wireless Gaming Mouse",
    category: "Gaming",
    price: 59.99,
    image: "https://example.com/images/gaming-mouse.jpg",
    description: "Ergonomic wireless mouse with adjustable DPI.",
  },
  {
    name: "Mechanical Gaming Keyboard",
    category: "Gaming",
    price: 89.99,
    image: "https://example.com/images/gaming-keyboard.jpg",
    description: "Durable keyboard with customizable RGB backlighting.",
  },
  {
    name: "Gaming Headset",
    category: "Gaming",
    price: 79.99,
    image: "https://example.com/images/gaming-headset.jpg",
    description: "Surround sound headset with noise-cancelling mic.",
  },
  {
    name: "4K Gaming Monitor",
    category: "Gaming",
    price: 399.99,
    image: "https://example.com/images/gaming-monitor.jpg",
    description:
      "27-inch monitor with 144Hz refresh rate and 1ms response time.",
  },
  {
    name: "Gaming Chair",
    category: "Gaming",
    price: 199.99,
    image: "https://example.com/images/gaming-chair.jpg",
    description: "Ergonomic chair with adjustable height and lumbar support.",
  },
  {
    name: "Gaming Controller",
    category: "Gaming",
    price: 49.99,
    image: "https://example.com/images/gaming-controller.jpg",
    description: "Wireless controller compatible with PC and consoles.",
  },
  {
    name: "RGB Mouse Pad",
    category: "Gaming",
    price: 29.99,
    image: "https://example.com/images/rgb-mousepad.jpg",
    description: "Large mouse pad with customizable RGB lighting.",
  },
  {
    name: "External Gaming SSD",
    category: "Gaming",
    price: 129.99,
    image: "https://example.com/images/gaming-ssd.jpg",
    description: "Fast external SSD with 1TB storage for games.",
  },
  {
    name: "VR Headset",
    category: "Gaming",
    price: 499.99,
    image: "https://example.com/images/vr-headset.jpg",
    description: "Immersive VR headset compatible with PC and VR games.",
  },
  {
    name: "Gaming Laptop Stand",
    category: "Gaming",
    price: 39.99,
    image: "https://example.com/images/laptop-stand.jpg",
    description: "Adjustable laptop stand to improve airflow and ergonomics.",
  },
  {
    name: "Gaming Capture Card",
    category: "Gaming",
    price: 149.99,
    image: "https://example.com/images/capture-card.jpg",
    description:
      "High-quality capture card for streaming and recording gameplay.",
  },
  {
    name: "Gaming Desk",
    category: "Gaming",
    price: 249.99,
    image: "https://example.com/images/gaming-desk.jpg",
    description: "Spacious gaming desk with cable management and RGB lighting.",
  },
];

export default products;

const productSeeder = async () => {
  try {
    await mongoose.connect(process.env.MONGO_HAMROBAZZAR_SEED);
    await ProductSchema.deleteMany({});
    await ProductSchema.insertMany(products);
    console.log("Products Seeded to the Databse");
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

productSeeder();
