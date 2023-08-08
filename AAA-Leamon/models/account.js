const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Account name must be provided'],
    },
    balance:{
        type: Number,
        default: 0.00,
    },
    committedCapital: {
        type: Number,
        default: 0.00,
    },
})

module.exports = mongoose.model('Account', accountSchema)
