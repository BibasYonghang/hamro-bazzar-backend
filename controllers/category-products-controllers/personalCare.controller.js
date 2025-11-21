import Products from "../../models/Products.js";

const getPersonalCareProducts = async (req, res) => {
  try {
    const personalCare = await Products.find({
      category: "Personal Care",
    }).limit(4);
    res.status(200).json(personalCare);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Enternal Error Says:", error: error.message });
  }
};

export default getPersonalCareProducts;
