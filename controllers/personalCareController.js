import Product from "../models/Products.js";

const getPersonalCare = async () => {
    try {
        const products = Product.find({ category: "Personal Care" });
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: "Enternal Error Says:", error: error.message })
    }

}

export default getPersonalCare;