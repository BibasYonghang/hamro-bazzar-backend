import gamingController from "../controllers/gaming.controller.js";
import express from "express";

const router = express.Router();
router.get("/", gamingController);
export default router;;
