const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = app => {
    app.get('/store', async (req, res) => {
        const product = await Product.find();
        
        res.send(product);
    })
};