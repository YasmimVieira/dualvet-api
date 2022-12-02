import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        name: { type: String },
        email: { type: String },
        phone: { type: String },
        cpf: { type: String },
        cep: { type: Number },
        city: { type: String },
        state: { type: String },
        neighborhood: { type: String },
        address: { type: String },
        buyer: { type: String },
        cardNumber: { type: Number },
        cardMonth: { type: Number },
        cardYear: { type: Number },
        cardCode: { type: Number }
    }
)

const payment = mongoose.model('payment', paymentSchema);

export default payment;