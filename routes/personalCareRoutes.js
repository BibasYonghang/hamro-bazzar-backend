import personalCareController from "../controllers/personalCareController.js";
import express from "express";

const router = express.Router();

router.get("/", personalCareController);

export default router