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
router.get("/success", paymentSuccess);
router.get("/failure", paymentFailure);

router.post("/generate-signature", generateSignature);

export default router;
