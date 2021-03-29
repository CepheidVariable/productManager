const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product must have a title!"],
        minlength: [2, "Title must be at least two characters in length!"]
    },
    price: {
        type: mongoose.Decimal128,
        required: [true, "Item must have a price!"],
        min: [0, "Price must be greater than $0.00!"]
    },
    description:{
        type: String,
        required: [true, "Item must have a description!"],
        minlength: [8, "Description must be at least 8 characters in length!"]
    }
}, {timestamps: true});

const Product = new mongoose.model('Product', ProductSchema );
module.exports = Product;