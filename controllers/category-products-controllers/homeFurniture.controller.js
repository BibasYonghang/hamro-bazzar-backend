import Products from "../../models/Products.js";

const getHomeFurnitureProducts = async (req, res) => {
  try {
    const homeFurniture = await Products.find({
      category: "Home Furniture",
    }).limit(4);
    res.status(200).json(homeFurniture);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal Error Says:", error: error.message });
  }
};

export default getHomeFurnitureProducts;
