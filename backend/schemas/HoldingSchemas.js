const {Schema} = require('mongoose');

const HoldingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true
    },
    avg: {
        type: Number,
        required: true
    },

    price: {
        type: Number,
        required: true
    },
    net:{
        type: String,
    },
    day: {
        type: String,
    },
    isLoss: {
        type: Boolean,
    }

});

module.exports = {HoldingSchema};