import OpenAI from "openai";

const apiKey = process.env.OPENAI_API_KEY;
const isApiKeyValid =
  apiKey && !apiKey.includes("YOUR_OPENAI_API_KEY_HERE") && apiKey.startsWith("sk-");

export const openai = isApiKeyValid ? new OpenAI({ apiKey }) : null;
export const openaiConfigured = Boolean(openai);
