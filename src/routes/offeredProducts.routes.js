import express from "express";
import offeredProducts from "../controllers/offeredProduct.controller.js";

const router = express.Router();

router.get("/", offeredProducts);

export default router;
