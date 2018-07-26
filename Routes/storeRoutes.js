const mongoose = require('mongoose');

const Product = mongoose.model('products');

module.exports = app => {
    app.post('/store', async (req, res) => {
        res.send(Product);
    })
};