import { createEmbedding } from "./embedding.service.js";
import { retrieveProducts } from "./retrieval.service.js";
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
  if (!message || !message.trim()) {
    throw new Error("A chat message is required.");
  }

  const queryEmbedding = await createEmbedding(message);
  const retrievedProducts = await retrieveProducts({
    queryEmbedding,
    topK,
    category,
    minPrice,
    maxPrice,
  });

  const filteredProducts = retrievedProducts.filter(
    (product) => product.score >= Number(similarityThreshold),
  );
  const resultsForAnswer = retrievedProducts.length ? retrievedProducts : [];

  const answer = resultsForAnswer.length
    ? await generateAiAnswer({
        messages: buildAiPromptMessages({
          query: message,
          products: resultsForAnswer,
          filters: { category, minPrice, maxPrice },
        }),
      })
    : "I couldn't find a strong product match in the catalog for that request. Please try a different query or adjust your category/price filters.";

  const recommendedProducts = filteredProducts.length
    ? filteredProducts
    : retrievedProducts;

  return {
    answer,
    products: recommendedProducts,
    metadata: {
      query: message,
      requestedTopK: topK,
      similarityThreshold: Number(similarityThreshold),
      category: category || "all",
      minPrice: minPrice != null ? Number(minPrice) : null,
      maxPrice: maxPrice != null ? Number(maxPrice) : null,
      retrievedCount: retrievedProducts.length,
      returnedCount: recommendedProducts.length,
    },
  };
};
