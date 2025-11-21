import express from "express";
import gamingController from "../../controllers/category-products-controllers/gaming.controller.js";

const router = express.Router();

router.get("/", gamingController);

export default router;
