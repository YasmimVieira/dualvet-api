import payment from '../models/Payment';

class PaymentController {
    static sendPayment = (req, res) => {
        let payments = new payment(req.body);

        payments.save((err) => {
            if(err) {
                res.status(500).send({ message: 'Erro para efetuar o pagamento!' });
            } else {
                res.status(201).send(payments.toJSON());
            }
        })
    }
}

export default PaymentController;