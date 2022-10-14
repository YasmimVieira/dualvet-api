import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        productName: { type: String },
        productDescription: { type: String },
        productPrice: { type: String },
    }
)

const product = mongoose.model('product', productSchema);

export default product;