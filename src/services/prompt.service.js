const buildProductContext = (products) => {
  if (!products.length) {
    return "No product matches were retrieved from the catalog.";
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

const buildFilterSummary = ({ category, minPrice, maxPrice }) => {
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
  return parts.length ? parts.join("; ") : "No additional filters.";
};

export const buildAiPromptMessages = ({ query, products, filters }) => {
  const context = buildProductContext(products);
  const filterSummary = buildFilterSummary(filters);

  return [
    {
      role: "system",
      content:
        "You are a responsible ecommerce shopping assistant. Answer using only the product catalog context provided. Do not hallucinate details, invent products, or claim knowledge outside the retrieved catalog.",
    },
    {
      role: "user",
      content: `Context:\n${context}\nFilters: ${filterSummary}\n\nQuestion:\n${query}\n\nRespond with helpful recommendations, product names, and short reasoning based only on the retrieved catalog items. If the catalog has no strong match, say so clearly and suggest refining the question or filters.`,
    },
  ];
};
