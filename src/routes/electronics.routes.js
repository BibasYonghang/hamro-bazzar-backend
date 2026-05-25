import express from "express";
import electronicsController from "../controllers/electronics.controller.js";

const router = express.Router();

router.get("/", electronicsController);

export default router