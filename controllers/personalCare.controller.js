import Product from "../models/Products.js";

const getPersonalCare = async (req,res) => {
    try {
        const products = await Product.find({ category: "Personal Care" });
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Internal Error Says:", error: error.message })
    }

}

export default getPersonalCare;