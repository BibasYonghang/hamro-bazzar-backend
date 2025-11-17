import express from "express";
import homeFurnitureController from "../../controllers/category-products-controllers/homeFurnitureController.js";

const router = express.Router();
router.get("/", homeFurnitureController);
export default router;
