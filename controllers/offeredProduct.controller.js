import Products from "../models/Products.model.js";

const getOfferedProducts = async (req, res) => {
  try {
    // Run all database queries in parallel
    const [electronics, gaming, personalCare, homeFurniture] =
      await Promise.all([
        Products.find({ category: "Electronics" }).limit(2),
        Products.find({ category: "Gaming" }).limit(2),
        Products.find({ category: "Personal Care" }).limit(2),
        Products.find({ category: "Home Furniture" }).limit(2),
      ]);

    //  Merge all arrays into one single array
    const offeredProducts = [
      ...electronics,
      ...gaming,
      ...personalCare,
      ...homeFurniture,
    ];
    console.log(offeredProducts);
    res.status(200).json(offeredProducts);
  } catch (error) {
    res.status(500).json({
      message: "Internal Error Says:",
      error: error.message,
    });
  }
};

export default getOfferedProducts;
