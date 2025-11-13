import Product from "../models/Products.js";

const getElectronics = async (req, res) => {
    try {
        const products = await Product.find({ category: "Electronics" });
        console.log("electronics products:", products);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export default getElectronics;