import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        name: String,
        quantity: Number,
        price: Number,
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      },
    ],
    shippingAddress1: { type: String },
    shippingAddress2: { type: String },
    city: { type: String },
    country: { type: String },
    zip: { type: String },
    phone: { type: String },
    totalPrice: { type: Number },
    isPaid: { type: Boolean, default: true },
    paidAt: { type: Date, default: Date.now },
    paymentMethod: { type: String, default: "esewa" },
  },
  { timestamps: true }
);

const OrderModel = mongoose.model("Order", orderSchema);

export default OrderModel;
