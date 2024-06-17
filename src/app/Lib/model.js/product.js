const { default: mongoose } = require("mongoose");

const productModal = new mongoose.Schema({
    name:String,
    price:String
});

export const product = mongoose.models.products || mongoose.model("products",productModal);

// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//     name: String,
//     price: String
// });

// const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

// module.exports = Product;
