const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Product = mongoose.model('Product');

module.exports = app => {
    app.get('/api/store', async (req, res) => {
        const product = await Product.find();
        res.send(product);
    })

   app.post('/api/store', requireLogin, async (req, res) => {
        const { imagePath, title, description, price, inventory, category } = req.body;

        const product = new Product({
            imagePath,
            title,
            description,
            price,
            inventory,
            category
        });

        try{
            await product.save();
            const user = await req.user.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(user);
        }
    });
};