import { index } from "../config/pinecone.js";

const normalizeFilterValue = (value) => {
  if (value === undefined || value === null || value === "") return undefined;
  return String(value).trim().toLowerCase();
};

export const retrieveProducts = async ({ queryEmbedding, topK = 5, category, minPrice, maxPrice }) => {
  if (!Array.isArray(queryEmbedding) || queryEmbedding.length === 0) {
    throw new Error("A valid query embedding is required for retrieval.");
  }

  const queryResponse = await index.query({
    vector: queryEmbedding,
    topK,
    includeMetadata: true,
  });

  const results = queryResponse.matches || [];
  const normalizedCategory = normalizeFilterValue(category);
  const min = minPrice != null ? Number(minPrice) : undefined;
  const max = maxPrice != null ? Number(maxPrice) : undefined;

  return results
    .filter((match) => match.metadata)
    .map((match) => {
      const metadata = match.metadata || {};
      return {
        id: match.id,
        score: typeof match.score === "number" ? match.score : 0,
        name: metadata.name || metadata.title || "Product",
        category: metadata.category || "Uncategorized",
        price: metadata.price != null ? Number(metadata.price) : null,
        description: metadata.description || "",
        image: metadata.image || "",
        metadata,
      };
    })
    .filter((product) => {
      if (normalizedCategory && normalizedCategory !== "all") {
        const productCategory = normalizeFilterValue(product.category);
        if (!productCategory || productCategory !== normalizedCategory) {
          return false;
        }
      }

      if (min != null && product.price != null && product.price < min) {
        return false;
      }
      if (max != null && product.price != null && product.price > max) {
        return false;
      }
      return true;
    })
    .sort((a, b) => b.score - a.score);
};
