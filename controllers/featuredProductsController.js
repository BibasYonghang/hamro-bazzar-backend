import Products from "../models/Products.js";

// Professional / Parallel Version (Recommended)

const getFeaturedProducts = async (req, res) => {
  try {
    // Run all database queries in parallel
    const [electronics, gaming, personalCare, homeFurniture] =
      await Promise.all([
        Products.find({ category: "Electronics" }).limit(2),
        Products.find({ category: "Gaming" }).limit(2),
        Products.find({ category: "Personal Care" }).limit(1),
        Products.find({ category: "Home Furniture" }).limit(1),
      ]);

    //  Merge all arrays into one single array
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


//    Sequential Version (For Learning / Reference)
   
// const getFeaturedProductsSequential = async (req, res) => {
//   try {
//     // Step 1: Fetch each category one by one
//     const electronics = await Products.find({ category: "Electronics" }).limit(2);
//     const gaming = await Products.find({ category: "Gaming" }).limit(2);
//     const personalCare = await Products.find({ category: "Personal Care" }).limit(1);
//     const homeFurniture = await Products.find({ category: "Home Furniture" }).limit(1);

//     // Step 2: Merge all arrays into a single array using spread operator
//     const featuredProducts = [
//       ...electronics,
//       ...gaming,
//       ...personalCare,
//       ...homeFurniture,
//     ];

//     // Step 3: Send the combined array to frontend
//     res.status(200).json(featuredProducts);
//   } catch (error) {
//     res.status(500).json({
//       message: "Internal Error Says:",
//       error: error.message,
//     });
//   }
// };

