import express from "express";
import homeFurnitureController from "../controllers/homeFurnitureController.js";

const router = express.Router();

router.get("/", homeFurnitureController);

export default router;