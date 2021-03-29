const ProductController = require('../controllers/product.controller');

module.exports = app => {
    app.get('/api/products', ProductController.index);
    app.get('/api/products/:id', ProductController.show);
    app.post('/api/products', ProductController.create);
    app.put('/api/products/:id', ProductController.update);
    app.delete('/api/products/:id', ProductController.delete);
}