import express from "express";
import ProductController from "../controllers/produtosController.js";

const router = express.Router();

router 
    .get("/product", ProductController.getProducts)
    .get("/product/:id", ProductController.getProductsById)                         
    .post("/product", ProductController.createProduct)                         
    .put("/product/:id", ProductController.updateProduct)                         
    .delete("/product/:id", ProductController.deleteProduct)                         

export default router;