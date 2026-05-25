import express from "express";
import {
  initiatePayment,
  paymentSuccess,
  paymentFailure,
} from "../../controllers/payments-controllers/esewa.controller.js";
import {
  generateSignature,
  createOrder,
} from "../../controllers/payments-controllers/order.controller.js";

const router = express.Router();

router.post("/payment", initiatePayment);
router.get("/success", paymentSuccess); // eSewa will redirect here on success
router.get("/failure", paymentFailure); // eSewa will redirect here on failure

router.post("/generate-signature", generateSignature);


export default router;
