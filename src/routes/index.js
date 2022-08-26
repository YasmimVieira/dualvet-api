const { Router } = require('express');
const UserController = require('../controllers/UserController');

const routes = Router();

routes.get('/', (req, res) => {
    res.send('Ola mundo')
})

routes.post('/users', UserController.createUser);
routes.get('/users', UserController.getUser),
routes.get('/users/:user_id');
routes.post('/login');
routes.post('/products/:user_id');
routes.get('/products/:user_id');
routes.delete('/products/:user_id/:products_id');
routes.get('/products/:products_id');
routes.get('/products');
routes.patch('/products/:user_id/:product-id');

module.exports = routes