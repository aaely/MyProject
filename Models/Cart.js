const mongoose = require('mongoose');
const { Schema } = mongoose;
const cartSchema = require('./cartSchema');

const CartSchema = new Schema({
    cart: { type: [cartSchema], default: [] },
    _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

mongoose.model('Cart', CartSchema);