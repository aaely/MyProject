const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    imagePath: { type: String, required: true},
    title: { type: String, required: true},
    description: { type: String, required: true},
    price: { type: Number, required: true },
    available: Number
});

mongoose.model('Product', productSchema);