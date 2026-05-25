import Products from "../../models/Products.model.js";

const getElectronicsProducts = async (req, res) => {
  try {
    const electronics = await Products.find({ category: "Electronics" }).limit(
      4
    );
    res.status(200).json(electronics);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal Error Says:", error: error.message });
  }
};

export default getElectronicsProducts;
