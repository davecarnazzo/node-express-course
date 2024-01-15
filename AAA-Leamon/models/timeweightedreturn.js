import mongoose from 'mongoose'
const timeweightedreturnSchema = new mongoose.Schema (
    {
        account: {
            type: String,
            required: [true, 'Account must be provided'],
        },periodStartDate: {
            type: Date,
            required: [true, 'Period Start Date must be provided'],
        },
        periodEndDate: {
            type: Date,
            required: [true, 'Period End Date must be provided'],
        },
        startingValue: {
            type: Number,
            required: [true, 'Starting Value must be provided'],
        },
        endingValue: {
            type: Number,
            required: [true, 'Ending Value must be provided'],
        },
        deposits: {
            type: Number,
            default: 0,
        },
        withdraws: {
            type: Number,
            default: 0,
        },
    }
)
module.exports = mongoose.model('TimeWeightedReturn', timeweightedreturnSchema)