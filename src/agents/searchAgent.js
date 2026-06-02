import ProductSchema from "../models/Products.model.js";

const searchAgent = {
  async search(query) {
    if (!query) return [];

    return await ProductSchema.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { category: { $regex: query, $options: "i" } },
      ],
    });
  },

  async filterByPrice(min, max) {
    return await ProductSchema.find({
      price: { $gte: min, $lte: max },
    });
  },
};

export default searchAgent;
