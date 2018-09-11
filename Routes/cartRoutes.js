const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => { 
    
    app.get('/api/cart', requireLogin, async (req, res) => {
        const cart = await Cart.find({_user: req.user.id });
            
        res.send(cart);
    });

    app.post('/api/cart', requireLogin, async (req, res) => {
        //const existingCart = await Cart.find({ _user: req.user.id });
        //if (existingCart) {
            //return existingCart;
        //}
        const { id, quantity, price } = req.body;
        
        const cart = new Cart({
                cart: { id, quantity, price },
                _user: req.user.id
            });
        

        try {
            await cart.save();
            const user = req.user.save;
            res.send(user);
            }
        catch (err) {
            res.status(422).send(req.user);
        }
    });
}