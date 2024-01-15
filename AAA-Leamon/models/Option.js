import { array, date } from 'joi';
import mongoose from 'mongoose'
const tradeSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            required: [true, 'Security must be provided'],
        },
        tradeType: {
            type: String,
            required: [true, 'Trade Type must be provided'],
            enum: ['CALL','PUT']
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
        strikePrice: {
            type: Number,
            required: [true, 'Strike Price name must be provided'],
        },
        premium: {
            type: Number,
            required: [true, 'Premium name must be provided'],
        },
        coveredReturn: {
            type: Number,
        },
        delta: {
            type: Number,
            required: [true, 'Delta must be provided'],
        },
        capitalCommitted: {
            type: Number
        },
        contracts: {
            type: Number,
            required: [true, 'Number of Contracts must be provided'],
        },
        premiumIncome: {
            type: Number
        },
        assignment_id: {
            type: String,
        },
        Status: {
            type: String,
            enum: ['ACTIVE','ASSIGNED','BOT','SOLD','EXPIRED'],
            default: 'ACTIVE',
        },
        exerciseDate: {
            type: Date,
        },
        exercisePrice: {
            type: Number,
        },
        sellDate: {
            type: Date,
        },
        sellPrice: {
            type: Number,
        },
        totalPremium: {
            type: Number
        },
        last: {
            type: Number
        },
        balance: {
            type: Number
        },
        Close: {
            type: String
        },
        strikePriceClose: {
            type: Number
        },
        strikePriceDate: {
            type: Date
        },
        bidClose: {
            type: Number
        },
        askClose: {
            type: Number
        },
        delta: {
            type: Number
        },
        coveredReturnClose: {
            type: Number
        },
        score: [
            {
            strikePrice: {
                type: Number,
            },
            bid: {
                type: Number,
            },
            ask: {
                type: Number,
            },
            delta: {
                type: Number,
            },
            coveredReturn: {
                type: Number
            },
        }
        ]
    },
    { 
        toJSON: { getters: true } //this right here
    }
);
module.exports = mongoose.model('Trade', tradeSchema)