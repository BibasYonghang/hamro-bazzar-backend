import express from "express";
import { initiatePayment, paymentSuccess, paymentFailure } from "../controllers/esewa.controller.js";

const router = express.Router();

router.post("/payment", initiatePayment);
router.get("/success", paymentSuccess); 
router.get("/failure", paymentFailure); 

export default router;
