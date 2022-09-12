import express from 'express';
import product from './product.js';

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({ titulo: "Ecommerce DualVet" })
    });

    app.use(
        express.json(),
        product
    )
}

export default routes;