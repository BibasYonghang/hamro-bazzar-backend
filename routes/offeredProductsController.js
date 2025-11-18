import express from "express";
import offeredProducts from "../controllers/offeredProductController.js";

const router = express.Router();

router.get("/", offeredProducts);

export default router;
