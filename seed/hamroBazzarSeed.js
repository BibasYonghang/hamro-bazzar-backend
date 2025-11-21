import mongoose from "mongoose";
import ProductSchema from "../models/Products.js";
import dotenv from "dotenv";

dotenv.config();

export const products = [
  {
    name: "Wireless Headphones",
    category: "Electronics",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763268736/61RahTQtAqL_jpirlg.jpg",
    description:
      "High-quality wireless headphones with noise cancellation & long battery life.",
  },
  {
    name: "Smartphone 128GB",
    category: "Electronics",
    price: 699.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763268783/71n1OfJ92YL_itunku.jpg",
    description:
      "Sleek and powerful smartphone with a high-resolution camera and fast processor.",
  },
  {
    name: "Gaming Laptop",
    category: "Electronics",
    price: 1299.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763268839/71IsafDXnKL_yvozs8.jpg",
    description:
      "High-performance gaming laptop with powerful GPU and fast SSD storage.",
  },
  {
    name: "Smartwatch Series 7",
    category: "Electronics",
    price: 399.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269343/51I1QoWjX3L._AC_UF894_1000_QL80__sk9eky.jpg",
    description:
      "Track your fitness and notifications with this sleek smartwatch.",
  },
  {
    name: "4K LED TV 55 inch",
    category: "Electronics",
    price: 499.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269418/2-1-1-953x1024_ads9bg.webp",
    description:
      "Ultra HD 4K smart TV with vivid colors and multiple streaming apps.",
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269468/61Mk3YqYHpL_se0ito.jpg",
    description:
      "Ergonomic wireless mouse with adjustable DPI and long battery life.",
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269551/Mechanical-Keyboard-Guide-Gear-GettyImages-1313504623_jw93on.jpg",
    description: "RGB backlit mechanical keyboard with tactile feedback.",
  },
  {
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269597/35059173.jpg.aspx_ajkvfy.jpg",
    description:
      "Portable Bluetooth speaker with deep bass and 12-hour battery life.",
  },
  {
    name: "Dining Table Set",
    category: "Home Furniture",
    price: 499.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269699/71gbV2WnHAL_dlsku0.jpg",
    description: "Modern 4-seater dining table set with wooden finish.",
  },
  {
    name: "Wardrobe",
    category: "Home Furniture",
    price: 299.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269716/white-and-natural-harper-bright-designs-armoires-wardrobes-qhs490aak-64_1000_vngyx0.jpg",
    description:
      "Spacious double-door wardrobe with hanging space and drawers.",
  },
  {
    name: "Recliner Sofa",
    category: "Home Furniture",
    price: 349.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269772/818s8OVFpqL_qzf0hc.jpg",
    description: "Comfortable recliner sofa with smooth reclining mechanism.",
  },
  {
    name: "Coffee Table",
    category: "Home Furniture",
    price: 129.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269875/BSD-141-OAK_scene1_qijj1n.jpg",
    description: "Stylish wooden coffee table with storage shelf underneath.",
  },
  {
    name: "TV Stand",
    category: "Home Furniture",
    price: 159.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269910/81dQm-u5Z_L_fdmdmq.jpg",
    description:
      "Modern TV stand with compartments for media devices and decor.",
  },
  {
    name: "Office Chair",
    category: "Home Furniture",
    price: 199.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269953/B315-BK_cjc0bw.jpg",
    description:
      "Comfortable ergonomic office chair with adjustable height and back support.",
  },
  {
    name: "Bookshelf",
    category: "Home Furniture",
    price: 149.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763269995/b74cc337-c1ba-4496-a4bc-c76e25d88597--20200529-Home52-3-Ways-to-Style-Bookshelves-Final-For-Color-New_Resolve-JW.00_00_04_21.Still004_t1wkzy.jpg",
    description: "Wooden bookshelf with 5 shelves, perfect for home or office.",
  },
  {
    name: "Bedside Table",
    category: "Home Furniture",
    price: 79.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270024/71drmSmjYML._AC_UF894_1000_QL80__oaul8z.jpg",
    description:
      "Compact bedside table with drawer and shelf for extra storage.",
  },
  {
    name: "Hair Dryer",
    category: "Personal Care",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270673/Revlon-1875W-Compact-Hair-Dryer-Black_9b619d96-02a9-470c-8c84-8ec2fda3cf6c.5afe0804f72f7d268cdb573c763bdaaa_ag7k4u.jpg",
    description: "Compact hair dryer with multiple heat and speed settings.",
  },
  {
    name: "Electric Toothbrush",
    category: "Personal Care",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270662/Oral-B-Pro-1000-Rechargeable-Electric-Toothbrush-White-1-Count-Adults-and-Children-3_a7217f7a-c8c8-4762-bdc8-6c5551042a6f.e61d30483be7370efb34196c6b4c04dd_fikbes.jpg",
    description:
      "Rechargeable electric toothbrush with multiple brushing modes.",
  },
  {
    name: "Shampoo Pack 2",
    category: "Personal Care",
    price: 14.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270614/HEAD-SHOULDERS-2in1-Classic-Clean-400ml-Anti-Dandruff-Shampoo-Conditioner-pack-2_5e9dbd81-9f25-480c-9020-916d774f9ae5.d5e8c733510bdd0eade78555470e29f1_nrwoi3.png",
    description:
      "Gentle shampoo suitable for all hair types in a affordable price",
  },
  {
    name: "Beard Trimmer",
    category: "Personal Care",
    price: 39.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270594/71sjruW5j8L._AC_UF1000_1000_QL80__tvlzps.jpg",
    description: "Rechargeable beard trimmer with adjustable length settings.",
  },
  {
    name: "Face Steamer",
    category: "Personal Care",
    price: 24.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270541/71gYPh6kDYL._AC_UF1000_1000_QL80__tszgo2.jpg",
    description:
      "Portable facial steamer for deep pore cleansing and hydration.",
  },
  {
    name: "Body Lotion",
    category: "Personal Care",
    price: 12.49,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270524/Renewel_Body_Lotion_Front-6599_76295a3e-80e5-4c13-8c61-6f13c5b5cf60_geyoak.jpg",
    description: "Moisturizing body lotion with long-lasting hydration.",
  },
  {
    name: "Hair Straightener",
    category: "Personal Care",
    price: 34.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270461/Anyask-Cordless-Hair-Straightener-Portable-Ionic-Hot-Straightening-Comb-for-Hair-Stying-Pink_fbbe98c8-45fb-46e1-8dc2-382bbfd6d017.ab275a05a820c2a63d1db74d1f97711d_cd0psu.jpg",
    description: "Ceramic hair straightener with fast heating technology.",
  },
  {
    name: "Nail Care Kit",
    category: "Personal Care",
    price: 19.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270427/71YhIr_4QwL._AC_UF1000_1000_QL80__gufpr0.jpg",
    description: "Complete nail grooming kit with clippers, files, and tools.",
  },
  {
    name: "Wireless Gaming Mouse",
    category: "Gaming",
    price: 59.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270341/RedragonRGBWirelessGamingMouseImpactEliteM913_1_ibg9tt.png",
    description:
      "Ergonomic wireless mouse with adjustable DPI in affordable price",
  },
  {
    name: "Mechanical Keyboard",
    category: "Gaming",
    price: 89.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270319/71FSIp_tDNL._AC_UF894_1000_QL80__eu6izz.jpg",
    description: "Durable keyboard with customizable RGB backlighting.",
  },
  {
    name: "Gaming Headset",
    category: "Gaming",
    price: 79.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270272/Beexcellent-Gaming-Headset-for-PS4-PS5-Switch-Xbox-One-PC-with-RGB-Light-Noise-Canceling-Mic-Surround-Sound-Gaming-Headphones-Black-Blue_d549a354-6daf-439a-bcfd-278c5d287f34.7afcf5f999dde0d8e2b998dd577babe5_qxwlz7.jpg",
    description:
      "Surround sound headset with noise-cancelling mic in affordable price.",
  },
  {
    name: "4K Gaming Monitor",
    category: "Gaming",
    price: 399.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270262/hero-1728069720656_rsntz5.jpg",
    description:
      "27-inch monitor with 144Hz refresh rate and 1ms response time.",
  },
  {
    name: "Gaming Chair",
    category: "Gaming",
    price: 199.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270193/Gaming-Chair-Seenda-Video-Game-Chair-with-Footrest-and-Lumbar-Support-Ergonomic-Computer-Chair-Height-Adjustable-with-Swivel-Seat-and-Headrest-Red_0aea1574-a3ea-402f-8680-2ce0e8f73756.0ee1a36dc04c9144163e11da797b3682_nqw1vc.jpg",
    description: "Ergonomic chair with adjustable height and lumbar support.",
  },
  {
    name: "Gaming Controller",
    category: "Gaming",
    price: 49.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270180/RGB-Wireless-Gaming-Controller-P05-PS4-Nintendo-Switch-21112022-01-p_gk2nd0.jpg",
    description:
      "Wireless controller compatible with PC and consoles in affordable price.",
  },
  {
    name: "RGB Mouse Pad",
    category: "Gaming",
    price: 29.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270129/61nSvG2CHQL_epa2du.jpg",
    description:
      "Large mouse pad with customizable RGB lighting perfect for Gaming.",
  },
  {
    name: "External Gaming SSD",
    category: "Gaming",
    price: 129.99,
    image:
      "https://res.cloudinary.com/dorwxf5yq/image/upload/v1763270115/firecudaa_nxekc1.jpg",
    description:
      "Fast external SSD with 1TB storage for heavy task such as gaming, video editing .",
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
