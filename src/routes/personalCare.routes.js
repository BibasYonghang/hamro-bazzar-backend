import personalCareController from "../controllers/personalCare.controller.js";
import express from "express";

const router = express.Router();

router.get("/", personalCareController);

export default router