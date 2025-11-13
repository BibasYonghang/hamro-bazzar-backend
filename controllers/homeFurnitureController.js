import Product from "../models/Products.js";

const getHomeFurniture = async (req, res) => {
    try {
        const products = await Product.find({category:"Home Furniture"});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
};

export default getHomeFurniture