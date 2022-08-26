const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    productName: { type: String, require: true },
    productDescription: { type: String, require: true },
    productPrice: { type: Number, require: true },
    productQuantity: { type: Number, require: true },
    productImg: { type: String,  required: true },
    username: { type: String,  required: true }

});

module.exports = mongoose.model('Product', Schema);