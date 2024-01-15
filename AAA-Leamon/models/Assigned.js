import mongoose from 'mongoose'
const assignedSchema = new mongoose.Schema(
    {
        symbol: {
            type: String,
            required: [true, 'Security must be provided'],
        },
        dateAssigned: {
            type: Date,
            default: Date.now(),
        },
        dateClosed: {
            type: Date,
        },
        strikePrice: {
            type: Number,
            required: [true, 'Strike Price name must be provided'],
        },
        premiumIncome: {
            type: Number,
            required: [true, 'Premium name must be provided'],
        },
        contracts: {
            type: Number,
            required: [true, 'Number of Contracts must be provided'],
        },
        status: {
            type: String,
            enum: ['ASSIGNED','CLOSED'],
            default: 'ASSIGNED',
        },
        assignment_id: {
            type: string,
        },
    },
    { 
        toJSON: { getters: true } //this right here
    }
);
module.exports = mongoose.model('Assigned', assignedSchema)
