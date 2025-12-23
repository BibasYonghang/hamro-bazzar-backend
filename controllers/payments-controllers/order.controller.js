import crypto from "crypto";

import OrderModel from "../../models/order.model.js"; // make sure you have an Order schema

const FRONTEND_URL = process.env.FRONTEND_URL;

export const generateSignature = (req, res) => {
  try {
    const { amount, phone, fullName } = req.body;

    const transaction_uuid = `order-${Math.floor(Math.random() * 1000000)}`;
    const product_code = "EPAYTEST";
    const tax_amount = 0;
    const product_service_charge = 0;
    const product_delivery_charge = 0;
    const total_amount =
      amount + tax_amount + product_service_charge + product_delivery_charge;

    const signed_field_names = "total_amount,transaction_uuid,product_code";

    // Create the string to sign in order
    const stringToSign = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

    // Replace this key with your eSewa secret key
    const secretKey = process.env.ESEWA_SECRET_KEY || "YOUR_SECRET_KEY";

    // Generate HMAC SHA-256 signature
    const signature = crypto
      .createHmac("sha256", secretKey)
      .update(stringToSign)
      .digest("base64");

    return res.json({
      amount,
      tax_amount,
      total_amount,
      transaction_uuid,
      product_code,
      product_service_charge,
      product_delivery_charge,
      success_url: `${FRONTEND_URL}/payment-success`,
      failure_url: `${FRONTEND_URL}/payment-failure`,
      signed_field_names,
      signature,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to generate signature" });
  }
};

export const createOrder = async (req, res) => {
  try {
    const orderData = req.body;

    if (!orderData || !orderData.orderItems?.length) {
      return res.status(400).json({ message: "Order data is missing" });
    }

    // Optional: calculate total price
    const totalPrice = orderData.orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    const newOrder = await OrderModel.create({
      ...orderData,
      totalPrice,
      isPaid: true,
      paidAt: Date.now(),
    });

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      order: newOrder,
    });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ success: false, message: "Failed to create order" });
  }
};
