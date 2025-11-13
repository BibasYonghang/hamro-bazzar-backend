import express from "express";
import electronicsController from "../controllers/electronicsController.js";

const router = express.Router();

router.get("/", electronicsController);

export default router