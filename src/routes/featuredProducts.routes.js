import express from "express";
import featuredProducts from "../controllers/featuredProducts.controller.js";

const router = express.Router();

router.get("/", featuredProducts);

export default router;
