import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        id: { type: String },
        productName: { type: String },
        productDescription: { type: String },
        productPrice: { type: String },
    }
)

const product = mongoose.model('product', productSchema);

export default product;