import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: String,
    price: Number,
    image: String,
    description: String,
});

const ProductSchema = mongoose.model("Product", productSchema);
export default ProductSchema;