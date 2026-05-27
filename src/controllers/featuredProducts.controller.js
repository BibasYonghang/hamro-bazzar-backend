import Products from "../models/Products.model.js";

const getFeaturedProducts = async (req, res) => {
  try {
    const [electronics, gaming, personalCare, homeFurniture] =
      await Promise.all([
        Products.find({ category: "Electronics" }).limit(2),
        Products.find({ category: "Gaming" }).limit(2),
        Products.find({ category: "Personal Care" }).limit(1),
        Products.find({ category: "Home Furniture" }).limit(1),
      ]);

    const featuredProducts = [
      ...electronics,
      ...gaming,
      ...personalCare,
      ...homeFurniture,
    ];
    res.status(200).json(featuredProducts);
  } catch (error) {
    res.status(500).json({
      message: "Internal Error Says:",
      error: error.message,
    });
  }
};

export default getFeaturedProducts;
