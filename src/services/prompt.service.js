const buildProductContext = (products, query) => {
  if (!products || products.length === 0) {
    return `
No matching products were found for: "${query}".

The assistant should now guide the user toward better product discovery instead of ending the conversation.
`;
  }

  return products
    .map((product, index) => {
      return `Product ${index + 1}:
Name: ${product.name}
Category: ${product.category}
Price: ${product.price != null ? `$${product.price}` : "N/A"}
Description: ${product.description}
`;
    })
    .join("\n");
};

const buildFilterSummary = ({ category, minPrice, maxPrice } = {}) => {
  const parts = [];

  if (category && category !== "all") {
    parts.push(`Category: ${category}`);
  }

  if (minPrice != null && minPrice !== "") {
    parts.push(`Min price: $${minPrice}`);
  }

  if (maxPrice != null && maxPrice !== "") {
    parts.push(`Max price: $${maxPrice}`);
  }

  return parts.length ? parts.join("; ") : "No filters applied.";
};

export const buildAiPromptMessages = ({
  query,
  products = [],
  filters = {},
}) => {
  const context = buildProductContext(products, query);
  const filterSummary = buildFilterSummary(filters);

  return [
    {
      role: "system",
      content: `
You are a friendly shopping assistant inside an ecommerce app.

CORE RULES:
- Only help users discover and compare products available in this app.
- Never mention internal implementation details (no mention of catalog, database, retrieval, context, or system).
- Always speak like a human shopping assistant.

BEHAVIOR WHEN NO MATCHES:
- If no relevant products are available:
  → Do NOT say anything about missing data or errors
  → Instead respond naturally like:
    "I couldn’t find exact matches, but I can still help you 👍
     Tell me what you're looking for (budget, category, or use case), and I’ll suggest the best options."

GOAL:
- Keep conversation flowing
- Help user refine intent naturally
- Always steer toward product discovery
      `.trim(),
    },
    {
      role: "user",
      content: `
Available Products:
${context}

Filters Applied:
${filterSummary}

User Request:
${query}

INSTRUCTIONS:
- Only use the available products above
- Recommend best matches when possible
- If no good matches exist, guide user naturally toward better search input
      `.trim(),
    },
  ];
};
