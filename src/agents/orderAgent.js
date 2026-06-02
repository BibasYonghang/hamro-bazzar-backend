import OrderModel from "../models/Order.model.js";

const orderAgent = {
  async createOrder(userId, cartItems) {
    if (!cartItems || cartItems.length === 0) {
      return "Cart is empty";
    }

    const total = cartItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    const order = await OrderModel.create({
      userId,
      items: cartItems,
      total,
      status: "processing",
    });

    return order;
  },

  async getOrder(orderId) {
    return await Order.findById(orderId);
  },

  async getUserOrders(userId) {
    return await Order.find({ userId });
  },

  async updateStatus(orderId, status) {
    return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
  },
};

export default orderAgent;
