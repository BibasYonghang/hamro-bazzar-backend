import mongoose from "mongoose";
import dotenv from "dotenv";
import { index } from "../src/config/pinecone.js";
import ProductSchema from "../src/models/Products.model.js";
import { createEmbedding } from "../src/services/embedding.service.js";

dotenv.config();

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    const products = await ProductSchema.find();

    console.log(`Found ${products.length} products`);

    for (const product of products) {
      try {
        const text = `
          Name: ${product.name}
          Category: ${product.category}
          Price: ${product.price}
          Description: ${product.description}
        `;

        const embedding = await createEmbedding(text);

        if (!Array.isArray(embedding) || embedding.length === 0) {
          continue;
        }

        await index.upsert({
          records: [
            {
              id: product._id.toString(),
              values: embedding,
              metadata: {
                name: product.name,
                category: product.category,
                price: product.price,
                description: product.description,
                image: product.image,
              },
            },
          ],
        });

        console.log(`Seeded: ${product.name}`);
      } catch (err) {
        console.log(`Failed: ${product.name}`, err.message);
      }
    }

    console.log(" Full MongoDB → Pinecone sync complete");

    await mongoose.disconnect();
  } catch (error) {
    console.log("Seeder Error:", error);
  }
};

seedProducts();
