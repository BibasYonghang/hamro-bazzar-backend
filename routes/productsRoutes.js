import express from "express";
import Product from "../models/Products.js";

const router = express.Router();
console.log("✅ Products routes loaded");

router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);

    } catch (error) {
        res.status(500).json({ message: "Enternal Error Says:", error: error.message });
    }
})

router.get("/category/:name", async (req, res) => {
    try {
        const electronicsProducts = await Product.find({ category: req.params.name })
        res.status(200).json(electronicsProducts);
        console.log("Electronics Fetched");
    } catch (error) {
        res.status(500).json({ message: "Eternal Error Says:", error: error.message })
    }
})


router.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message });
    }
});

export default router