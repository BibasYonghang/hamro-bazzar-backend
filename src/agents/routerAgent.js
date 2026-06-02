import { navigateAgent } from "./navigationAgent.js";

export async function routeAgent(message) {
  const msg = message.toLowerCase();

  // NAVIGATION INTENT
  const navigationResult = await navigateAgent(message);
  if (navigationResult) {
    return "navigation_agent";
  }

  // SEARCH INTENT
  if (
    msg.includes("search") ||
    msg.includes("find") ||
    msg.includes("show") ||
    msg.includes("products")
  ) {
    return "search_agent";
  }

  // CART INTENT
  if (msg.includes("cart") || msg.includes("add") || msg.includes("remove")) {
    return "cart_agent";
  }

  // SUPPORT INTENT
  if (
    msg.includes("help") ||
    msg.includes("shipping") ||
    msg.includes("return") ||
    msg.includes("refund")
  ) {
    return "support_agent";
  }

  // RECOMMENDATION INTENT
  if (
    msg.includes("recommend") ||
    msg.includes("suggest") ||
    msg.includes("similar")
  ) {
    return "recommendation_agent";
  }

  // ORDER INTENT
  if (
    msg.includes("order") ||
    msg.includes("buy") ||
    msg.includes("checkout")
  ) {
    return "order_agent";
  }

  return "general_agent";
}
