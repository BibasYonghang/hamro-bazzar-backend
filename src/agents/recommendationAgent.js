import ProductSchema from "../models/Products.model.js";

const recommendationAgent = {
  async byCategory(category) {
    return await ProductSchema.find({ category });
  },

  async trending() {
    return await ProductSchema.aggregate([{ $sample: { size: 5 } }]);
  },

  async similar(productId) {
    const product = await Product.findById(productId);
    if (!product) return [];

    return await ProductSchema.find({
      category: product.category,
      _id: { $ne: product._id },
    });
  },
};

export default recommendationAgent;
