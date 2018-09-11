const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
        id: String,
        quantity: Number,
        price: Number
    });

module.exports = cartSchema;