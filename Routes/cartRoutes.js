const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => { 
    
    app.get('/api/cart', requireLogin, async (req, res) => {
        const cartExists = await Cart.find({ _user: req.user.id })
            .select({ _id: false, _user: false, __v: false });
        if(cartExists) {
            res.send(cartExists);
            
        } else {            
            const newCart = new Cart({
                cart: [{ id, quantity, price }],
                _user: req.user.id
            });
            await newCart.save();
            res.send(newCart);
        }
    });

    app.post('/api/cart', requireLogin, async (req, res) => {

        try {
            const { id, quantity, price } = req.body;
            let user1 = { _user: req.user.id };
            await Cart.findOneAndUpdate(user1 , {$push: {cart: id, quantity, price} });
            const user = req.user.save;
            res.send(user);
            }
        catch (err) {
            res.status(422).send(req.user);
        }
    });

app.post('/api/cart/add', requireLogin, async (req, res) => {
    const { id, quantity, price } = req.body;
    let exists = await Cart.find({ _user: req.user.id });
    if (exists) {
        res.send(exists);
    }

    else {
        const cart = new Cart ({
            cart: [{ id, quantity, price }],
            _user: req.user.id
        });

        await cart.save()
    }
            /*let user1 = { _user: req.user.id };
            await Cart.findOneAndUpdate(user1 , {$push: {cart: id, quantity, price} });
            const user = req.user.save();
            res.send(user);*/
            }
        );
    }