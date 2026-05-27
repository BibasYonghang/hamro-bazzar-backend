import { createEmbedding } from "./embeddingService.js";
import { index } from "../config/pinecone.js";
import { groq } from "../config/groq.js";

export const askAI = async (question) => {
  // STEP 1: Convert question to embedding
  const queryEmbedding = await createEmbedding(question);

  // STEP 2: Search Pinecone
  const results = await index.query({
    vector: queryEmbedding,
    topK: 5,
    includeMetadata: true,
  });

  // STEP 3: Build context
  const context = results.matches
    .map((item) => {
      return `
Title: ${item.metadata.title}
Description: ${item.metadata.description}
Price: ${item.metadata.price}
`;
    })
    .join("\n");

  // STEP 4: Send to Groq
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: "You are an AI shopping assistant. Only use provided context.",
      },
      {
        role: "user",
        content: `Context:\n${context}\n\nQuestion:\n${question}`,
      },
    ],
  });

  return completion.choices[0].message.content;
};
