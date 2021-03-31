const Product = require('../models/product.model');

module.exports = {
    index: (req, res) => {
        Product.find()
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    show: (req, res) => {
        Product.find({_id: req.params.id})
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    create: (req, res) => {
        Product.create(req.body)
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    update: (req, res) => {
        Product.findOneAndUpdate(
            { _id: req.params.id },             //filter
            req.body,                           //replacement
            { new: true, runValidators: true }  //options
        )
            .then(data => res.json({results: data}))
            .catch(err => res.status(404).json({errors: err.errors}))
    },
    delete: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then(() => res.redirect(303, '/api/products'))
            .catch(err => res.status(404).json({errors: err.errors}))
    }
};