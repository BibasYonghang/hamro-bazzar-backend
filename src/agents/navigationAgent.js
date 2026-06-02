const NAVIGATION_TARGETS = [
  { keywords: ["gaming"], path: "/gaming", label: "Gaming" },
  { keywords: ["personal care", "personal-care", "beauty"], path: "/personal-care", label: "Personal Care" },
  { keywords: ["home furniture", "home-furniture", "furniture"], path: "/home-furniture", label: "Home Furniture" },
  { keywords: ["electronics"], path: "/electronics", label: "Electronics" },
  { keywords: ["all products", "all-products", "products"], path: "/all-products", label: "All Products" },
  { keywords: ["offer", "offers", "offered products", "offered-products"], path: "/offered-products", label: "Offers" },
  { keywords: ["collections"], path: "/collections", label: "Collections" },
  { keywords: ["cart"], path: "/cart", label: "Cart" },
  { keywords: ["checkout"], path: "/checkout", label: "Checkout" },
];

const isNavigationPhrase = (message) => {
  const normalized = message.toLowerCase();
  return [
    "go to",
    "navigate to",
    "take me to",
    "bring me to",
    "open",
    "show me the",
    "show me",
  ].some((phrase) => normalized.includes(phrase));
};

const hasPageIntent = (message) => {
  const normalized = message.toLowerCase();
  return ["page", "section", "category", "shop", "store", "collection"].some((word) =>
    normalized.includes(word),
  );
};

const findTarget = (message) => {
  const normalized = message.toLowerCase();
  return NAVIGATION_TARGETS.find((target) =>
    target.keywords.some((keyword) => normalized.includes(keyword)),
  );
};

export async function navigateAgent(message) {
  const target = findTarget(message);
  if (!target) return null;

  if (!isNavigationPhrase(message) && !hasPageIntent(message)) {
    return null;
  }

  return {
    path: target.path,
    label: target.label,
    message: `Sure! Taking you to the ${target.label} page now.`,
  };
}
