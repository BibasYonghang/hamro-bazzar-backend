import Product from "../models/Products.model.js";

const getGamingProducts = async (req, res) => {
  try {
    const products = await Product.find({ category: "Gaming" });
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enteral Error Says:", error: error.message });
  }
};

export default getGamingProducts;
