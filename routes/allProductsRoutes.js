import allProductsController from "../controllers/allProductsController.js";
import express from "express";

const router = express.Router();
router.use("/", allProductsController);

export default router;
