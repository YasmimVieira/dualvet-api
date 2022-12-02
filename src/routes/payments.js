import express from "express";
import PaymentController from "../controllers/paymentController";

const router = express.Router();

router                    
    .post("/payment", PaymentController.sendPayment())                         

export default router;