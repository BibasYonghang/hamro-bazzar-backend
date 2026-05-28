import { createEmbedding } from "./embedding.service.js";
import { retrieveProducts } from "./retrieval.service.js";
import { getProductsByIds } from "./product.service.js";
import { buildAiPromptMessages } from "./prompt.service.js";
import { generateAiAnswer } from "./aiGeneration.service.js";

export const handleAIChat = async ({
  message,
  category,
  minPrice,
  maxPrice,
  topK = 4,
  similarityThreshold = 0.62,
}) => {
  if (!message?.trim()) {
    throw new Error("A chat message is required.");
  }

  const queryEmbedding = await createEmbedding(message);

  const vectorResults = await retrieveProducts({
    queryEmbedding,
    topK,
  });

  const ids = vectorResults.map((r) => r.id);

  const fullProducts = await getProductsByIds(ids);

  const scoredProducts = vectorResults
    .filter((r) => r.score >= similarityThreshold)
    .map((r) => r.id);

  const filteredProducts = fullProducts.filter((p) =>
    scoredProducts.includes(p._id.toString()),
  );

  const productsForAI =
    filteredProducts.length > 0 ? filteredProducts : fullProducts;

  // STEP 5: Build prompt
  const messages = buildAiPromptMessages({
    query: message,
    products: productsForAI,
    filters: { category, minPrice, maxPrice },
  });

  const answer = await generateAiAnswer({ messages });

  return {
    answer,
    products: productsForAI,
    metadata: {
      retrievedCount: fullProducts.length,
      returnedCount: productsForAI.length,
      similarityThreshold,
    },
  };
};
