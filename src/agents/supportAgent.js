const supportAgent = {
  async handle(message) {
    const msg = message.toLowerCase();

    if (msg.includes("shipping")) {
      return "Shipping takes 3–5 business days in Nepal and 5–10 internationally.";
    }

    if (msg.includes("return")) {
      return "You can return products within 7–30 days depending on product type.";
    }

    if (msg.includes("payment")) {
      return "We support eSewa, Khalti, and cash on delivery.";
    }

    if (msg.includes("refund")) {
      return "Refunds are processed within 3–7 business days after approval.";
    }

    return "I can help with shipping, returns, payment, and refunds.";
  },
};

export default supportAgent;
