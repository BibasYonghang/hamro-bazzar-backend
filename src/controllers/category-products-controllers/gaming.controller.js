import Products from "../../models/Products.model.js";

const getGamingProducts = async (req, res) => {
  try {
    const gaming = await Products.find({ category: "Gaming" }).limit(4);
    res.status(200).json(gaming);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal Error Says:", error: error.message });
  }
};

export default getGamingProducts;
