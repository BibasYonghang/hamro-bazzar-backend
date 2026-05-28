import allProductsController from "../controllers/allProducts.controller.js";
import express from "express";

const router = express.Router();
router.get("/", allProductsController);

export default router;
