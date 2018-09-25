const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    vendor: String,
    name: String,
    app: String,
    timeIn: String,
    email: [RecipientSchema],
    vendorTicket: String,
    reason: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    date: Date,
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0},
    lastResponded: { type: Date, default: null }
});

mongoose.model('surveys', surveySchema);