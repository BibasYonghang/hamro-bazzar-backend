import mongoose from "mongoose";
import dotenv from "dotenv";
import { index } from "../src/config/pinecone.js";
import ProductSchema from "../src/models/Products.model.js";
import products from "../src/data/products.js";
import { createEmbedding } from "../src/services/embeddingService.js";

dotenv.config();

const seedProducts = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_HAMROBAZZAR_SEED);
    console.log("MongoDB connected");

    // 2. Clear old data
    await ProductSchema.deleteMany({});
    console.log("Old products cleared");

    // 3. Loop products safely
    for (const product of products) {
      try {
        // 4. Save to MongoDB
        const savedProduct = await ProductSchema.create(product);

        // 5. Prepare text for embedding
        const text = `
          Name: ${product.name}
          Category: ${product.category}
          Price: ${product.price}
          Description: ${product.description}
        `;

        // 6. Create embedding
        const embedding = await createEmbedding(text);

        // 7. VALIDATION (CRITICAL FIX)
        if (!Array.isArray(embedding) || embedding.length === 0) {
          console.log(`Skipping ${product.name} → invalid embedding`);
          continue;
        }

        // 8. Upsert into Pinecone
        await index.upsert({
          records: [
            {
              id: savedProduct._id.toString(),
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
      } catch (productError) {
        console.log(`Failed product: ${product.name}`, productError.message);
      }
    }

    console.log("✅ All products seeded successfully");

    await mongoose.disconnect();
    console.log("MongoDB disconnected");
  } catch (error) {
    console.log("Seeder Error:", error);
  }
};

seedProducts();
