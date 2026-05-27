import crypto from "crypto";
import { v4 as uuidv4 } from "uuid";

const FRONTEND_URL = process.env.FRONTEND_URL;

export const initiatePayment = (req, res) => {
  console.log("🔹 eSewa Payload Check");
  console.log("Input String:", inputString);
  console.log("Generated Signature:", signature);
  console.log("Total Amount:", total_amount);
  console.log("Transaction UUID:", transaction_uuid);

  const { amount, phone, fullName } = req.body;
  if (!amount || !phone || !fullName)
    return res.status(400).json({ message: "Missing required fields" });

  const tax_amount = 0;
  const product_service_charge = 0;
  const product_delivery_charge = 0;


  const total_amount =
    Number(amount) +
    tax_amount +
    product_service_charge +
    product_delivery_charge;

  const transaction_uuid = uuidv4();
  const product_code = "EPAYTEST"; // sandbox merchant code

  const success_url = `${FRONTEND_URL}/api/esewa/success`;
  const failure_url = `${FRONTEND_URL}/api/esewa/failure`;

  const signed_field_names = "total_amount,transaction_uuid,product_code";

  const inputString = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=${product_code}`;

  const secretKey = "8gBm/:&EnhH.1/q";

  const hmac = crypto.createHmac("sha256", secretKey);
  hmac.update(inputString);
  const signature = hmac.digest("base64");

  res.json({
    amount,
    tax_amount,
    total_amount,
    product_service_charge,
    product_delivery_charge,
    transaction_uuid,
    product_code,
    success_url,
    failure_url,
    signed_field_names,
    signature,
  });
};

export const paymentSuccess = (req, res) => {
  res.send("<h1>✅ Payment Successful (Test Mode)</h1>");
};

export const paymentFailure = (req, res) => {
  res.send("<h1>❌ Payment Failed or Cancelled (Test Mode)</h1>");
};
