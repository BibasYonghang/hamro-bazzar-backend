import Products from "../models/Products.js";

const getAllProducts = async (req, res) => {
  try {
    const products = Products.find();
    res.status(200).json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal Error Says :", error: error.message });
  }
};

export default getAllProducts;
