import ProductSchema from "../models/Products.model.js";

let carts = {};
// userId -> cart items

const cartAgent = {
  async addToCart(userId, productId, quantity = 1) {
    const product = await ProductSchema.findById(productId);
    if (!product) return "Product not found";

    if (!carts[userId]) carts[userId] = [];

    const cart = carts[userId];

    const existing = cart.find(
      (item) => item.product._id.toString() === productId,
    );

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }

    return cart;
  },

  getCart(userId) {
    return carts[userId] || [];
  },

  removeFromCart(userId, productId) {
    if (!carts[userId]) return;

    carts[userId] = carts[userId].filter(
      (item) => item.product._id.toString() !== productId,
    );

    return carts[userId];
  },

  clearCart(userId) {
    carts[userId] = [];
  },
};

export default cartAgent;
