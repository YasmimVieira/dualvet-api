import mongoose from "mongoose";

const authenticationSchema = new mongoose.Schema(
    {
        id: { type: String },
        productName: { type: String },
        productDescription: { type: String },
        productPrice: { type: String },
    }
)