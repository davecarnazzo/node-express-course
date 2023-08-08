import mongoose from 'mongoose'
const rorSchema = new mongoose.Schema (
    {
        priceLast: {
            type: Number,
            required: [true, 'The Last stock price name must be provided'],
        },
        expiryDate: {
            type: Date,
            required: [true, 'Expiration Date must be provided'],
        },
        expiryDays: {
            type: Number,
        },
        strikePrice: {
            type: Number,
            required: [true, 'Strike Price name must be provided'],
        },
        returnOnRisk: {
            type: Number,
        },
    }
)
module.exports = mongoose.model('ror', rorSchema)