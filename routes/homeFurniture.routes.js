import express from "express";
import homeFurnitureController from "../controllers/homeFurniture.controller.js";

const router = express.Router();
router.get("/", homeFurnitureController);
export default router;
