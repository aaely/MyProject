const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Product = mongoose.model('Product');
//const Cart = mongoose.model('Cart');

module.exports = app => {
    app.get('/api/store', async (req, res) => {
        const product = await Product.find();
        res.send(product);
        //res.send(cart);
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
            //await transactionConfirmation();
            await product.save();
            const user = await req.user.save();
            //cart.save();
            res.send(user);
        } catch (err) {
            res.status(422).send(user);
        }
    });

    app.get('/api/cart', requireLogin, async (req, res) => {
        const cart = new Cart({
            _id: req.product._id,
            title,
            quantity,
            price
        });
        res.send(cart);
    });

    app.post('/api/cart', requireLogin, async (req, res) => {
        const {_id, title, quantity, price } = req.body;

        const cart = new Cart({
            _id: req.product._id,
            title,
            quantity,
            price
        });

        try {
        res.send(cart);
        } catch (err) {
            res.status(422).send(user);
        }
    });
};