const mongoose = require('mongoose');
const { Schema } = mongoose;
const cartSchema = require('./cartSchema');

const cart = new Schema({
    productId: [cartSchema],
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    quantity: Number,
    price: Number
});

mongoose.model('cart', cart);