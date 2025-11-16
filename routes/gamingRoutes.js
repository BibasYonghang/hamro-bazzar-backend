import gamingController from "../controllers/gamingController.js";
import express from "express";

const router = express.Router();
router.get("/", gamingController);
export default router;;
