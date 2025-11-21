import personalCareController from "../../controllers/category-products-controllers/personalCare.controller.js";
import express from "express";

const router = express.Router();

router.get("/", personalCareController);

export default router;
