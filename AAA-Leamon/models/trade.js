import mongoose from 'mongoose'
const tradeSchema = new mongoose.Schema(
    {
        security:{
            type: String,
            required: [true, 'Security must be provided'],
        },
        tradeType:{
            type: String,
            required: [true, 'Trade Type must be provided'],
        },
        tradeDate: {
            type: Date,
            default: Date.now(),
        },
        stockPrice: {
            type: Number,
            required: [true, 'The Last stock price name must be provided'],
        },
        expiryDate: {
            type: Date,
            required: [true, 'Expiration Date must be provided'],
        },
        expiryDays: {
            type: Number,
//            get: v => (v/100).toFixed(2),
//            function datediff(first, second) {        
//                return Math.round((second - first) / (1000 * 60 * 60 * 24));
        },
        strikePrice: {
            type: Number,
            required: [true, 'Strike Price name must be provided'],
        },
        premium: {
            type: Number,
            required: [true, 'Premium name must be provided'],
        },
        returnOnRisk: {
            type: Number,
        },
        delta:{
            type: Number,
            required: [true, 'Delta must be provided'],
        },
        capitalCommitted:{
            type: Number,
        },
        contracts:{
            type: Number,
            required: [true, 'Number of Contracts must be provided'],
        },
        premium:{
            type: Number,
        },
    },
    { 
        toJSON: { getters: true } //this right here
    }
);
module.exports = mongoose.model('trade', tradeSchema)