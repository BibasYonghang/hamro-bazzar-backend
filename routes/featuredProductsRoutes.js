import express from "express";
import featuredProducts from "../controllers/featuredProductsController.js";

const router = express.Router();

router.get("/", featuredProducts);

export default router;
