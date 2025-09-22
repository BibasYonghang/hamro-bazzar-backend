import express from "express";
import Product from "../models/Products.js";

const router = express.Router();

/**
 * @route   GET /api/products
 * @desc    Fetch all products
 * @access  Public
 */
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products); // Send all products
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

/**
 * @route   GET /api/products/:id
 * @desc    Fetch a single product by MongoDB _id OR custom id
 * @access  Public
 */
router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Try to find by MongoDB _id first
        let product = await Product.findById(id);

        // If not found by _id, try by custom numeric id field
        if (!product) {
            product = await Product.findOne({ id: parseInt(id) });
        }

        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.json(product);
    } catch (error) {
        console.error("Error fetching single product:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

export default router;