import { pipeline } from "@xenova/transformers";

let extractor;

const loadModel = async () => {
  if (!extractor) {
    console.log("Loading embedding model...");
    extractor = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
    console.log("Model loaded successfully");
  }
  return extractor;
};

export const createEmbedding = async (text) => {
  try {
    const model = await loadModel();

    console.log("Creating embedding for text:", text.slice(0, 50));

    const output = await model(text, {
      pooling: "mean",
      normalize: true,
    });

    console.log("Raw output keys:", Object.keys(output));

    const embedding = Array.from(output.data);

    console.log("Embedding length:", embedding.length);

    return embedding;
  } catch (err) {
    console.log("Embedding ERROR:", err);
    return [];
  }
};
