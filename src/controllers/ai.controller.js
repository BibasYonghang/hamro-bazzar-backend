import { handleAIChat } from "../services/ai.service.js";

export const chatWithAI = async (req, res) => {
  try {
    const {
      message,
      category,
      minPrice,
      maxPrice,
      topK,
      similarityThreshold,
    } = req.body;

    const result = await handleAIChat({
      message,
      category,
      minPrice,
      maxPrice,
      topK,
      similarityThreshold,
    });

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    console.error("AI chat error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to process AI chat request.",
    });
  }
};
