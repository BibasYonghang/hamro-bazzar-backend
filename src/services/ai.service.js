import { createEmbedding } from "./embedding.service.js";
import { retrieveProducts } from "./retrieval.service.js";
import { getProductsByIds } from "./product.service.js";
import { buildAiPromptMessages } from "./prompt.service.js";
import { generateAiAnswer } from "./aiGeneration.service.js";

import { orchestrator } from "../agents/orchestrator.js";

export const handleAIChat = async ({
  message,
  category,
  minPrice,
  maxPrice,
  topK = 4,
  similarityThreshold = 0.62,
  useOrchestrator = true,
  userId,
  cartItems,
}) => {
  if (!message?.trim()) {
    throw new Error("A chat message is required.");
  }

  let orchestratorResponse = null;

  if (useOrchestrator) {
    try {
      orchestratorResponse = await orchestrator(message, {
        userId,
        cartItems,
      });
    } catch (err) {
      console.warn("Orchestrator failed, falling back to RAG:", err.message);
    }
  }

  if (orchestratorResponse) {
    // SEARCH RESPONSE
    if (orchestratorResponse.type === "search") {
      return {
        answer: orchestratorResponse.message,
        type: "search",
        products: orchestratorResponse.data,
        source: "orchestrator",
      };
    }

    // CART RESPONSE
    if (orchestratorResponse.type === "cart") {
      return {
        answer: orchestratorResponse.message,
        type: "cart",
        cart: orchestratorResponse.data,
        source: "orchestrator",
      };
    }

    // RECOMMENDATION RESPONSE
    if (orchestratorResponse.type === "recommendation") {
      return {
        answer: orchestratorResponse.message,
        type: "recommendation",
        products: orchestratorResponse.data,
        source: "orchestrator",
      };
    }

    // ORDER RESPONSE
    if (orchestratorResponse.type === "order") {
      return {
        answer: orchestratorResponse.message,
        type: "order",
        order: orchestratorResponse.data,
        source: "orchestrator",
      };
    }

    // SUPPORT RESPONSE
    if (orchestratorResponse.type === "support") {
      return {
        answer: orchestratorResponse.message,
        type: "support",
        source: "orchestrator",
      };
    }

    // NAVIGATION RESPONSE
    if (orchestratorResponse.type === "navigation") {
      return {
        answer: orchestratorResponse.message,
        type: "navigation",
        path: orchestratorResponse.data?.path,
        label: orchestratorResponse.data?.label,
        source: "orchestrator",
      };
    }
  }

  const queryEmbedding = await createEmbedding(message);

  const vectorResults = await retrieveProducts({
    queryEmbedding,
    topK,
  });

  const ids = vectorResults.map((r) => r.id);

  const fullProducts = ids.length > 0 ? await getProductsByIds(ids) : [];

  const scoredProducts = vectorResults
    .filter((r) => r.score >= similarityThreshold)
    .map((r) => r.id);

  const filteredProducts = fullProducts.filter((p) =>
    scoredProducts.includes(p._id.toString()),
  );

  const productsForAI =
    filteredProducts.length > 0 ? filteredProducts : fullProducts;

  const messages = buildAiPromptMessages({
    query: message,
    products: productsForAI,
    filters: { category, minPrice, maxPrice },
  });

  // Optional: inject agent guidance into prompt
  if (orchestratorResponse) {
    messages[1].content += `\n\nAgent Context:\n${JSON.stringify(
      orchestratorResponse,
    )}`;
  }
  const answer = await generateAiAnswer({ messages });

  // Try to parse structured response (optional)
  let parsed = null;
  try {
    parsed = JSON.parse(answer);
  } catch (err) {
    parsed = null;
  }

  return {
    answer,
    type: parsed?.type || "chat",
    products: productsForAI,
    orchestratorRoute: orchestratorResponse ? "used" : "skipped",
    metadata: {
      retrievedCount: fullProducts.length,
      returnedCount: productsForAI.length,
      similarityThreshold,
    },
  };
};
