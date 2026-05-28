import { index } from "../config/pinecone.js";

const normalizeFilterValue = (value) => {
  if (value === undefined || value === null || value === "") return undefined;
  return String(value).trim().toLowerCase();
};

export const retrieveProducts = async ({ queryEmbedding, topK = 5 }) => {
  const queryResponse = await index.query({
    vector: queryEmbedding,
    topK,
    includeMetadata: true,
  });

  return (queryResponse.matches || []).map((match) => ({
    id: match.id,
    score: match.score,
  }));
};
