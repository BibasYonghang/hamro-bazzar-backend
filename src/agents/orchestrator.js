import searchAgent from "./searchAgent.js";
import cartAgent from "./cartAgent.js";
import supportAgent from "./supportAgent.js";
import recommendationAgent from "./recommendationAgent.js";
import orderAgent from "./orderAgent.js";
import { routeAgent } from "./routerAgent.js";
import { navigateAgent } from "./navigationAgent.js";

// fallback agent (simple response)
const generalAgent = async (message) => {
  return {
    type: "chat",
    message:
      "I can help you with products, cart, orders, recommendations, and support.",
  };
};

export async function orchestrator(message, context = {}) {
  const agent = await routeAgent(message);

  switch (agent) {
    // 🔎 SEARCH
    case "search_agent": {
      const result = await searchAgent.search(message);

      return {
        type: "search",
        agent: "search_agent",
        message: "Here are the products I found.",
        data: result,
      };
    }

    // 🛒 CART
    case "cart_agent": {
      const { userId = "default", productId, action } = context;

      let result;

      if (action === "add") {
        result = await cartAgent.addToCart(userId, productId);
      } else if (action === "remove") {
        result = await cartAgent.removeFromCart(userId, productId);
      } else {
        result = cartAgent.getCart(userId);
      }

      return {
        type: "cart",
        agent: "cart_agent",
        message: "Cart updated successfully.",
        data: result,
      };
    }

    // 💬 SUPPORT
    case "support_agent": {
      const reply = await supportAgent.handle(message);

      return {
        type: "support",
        agent: "support_agent",
        message: reply,
      };
    }

    // 🧭 NAVIGATION
    case "navigation_agent": {
      const result = await navigateAgent(message);
      if (!result) {
        return {
          type: "chat",
          agent: "navigation_agent",
          message: "I wasn't able to find the right page. Can you try again?",
        };
      }

      return {
        type: "navigation",
        agent: "navigation_agent",
        message: result.message,
        data: result,
      };
    }

    // ⭐ RECOMMENDATION
    case "recommendation_agent": {
      const category = context.category || message.split(" ").pop(); // fallback simple parsing

      const result = await recommendationAgent.byCategory(category);

      return {
        type: "recommendation",
        agent: "recommendation_agent",
        message: "Here are recommended products.",
        data: result,
      };
    }

    // 📦 ORDER
    case "order_agent": {
      const { userId = "default", cartItems } = context;

      const result = await orderAgent.createOrder(userId, cartItems);

      return {
        type: "order",
        agent: "order_agent",
        message: "Order processed successfully.",
        data: result,
      };
    }

    // 🧠 DEFAULT
    default:
      return await generalAgent(message);
  }
}
