const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema({
    productId: String,
});

module.exports = cartSchema;