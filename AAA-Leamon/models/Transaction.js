const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema(
  {
    accountName:{
      type: String,
      required: [true, 'Account name must be provided'],
    },
    date: {
      type: Date,
    },
    startingBalance:{
      type: Number,
      default: 0.00,
    },
    endingBalance:{
      type: Number,
      default: 0.00,
    },
    change: 
    [ 
      {
        amount: {
        type: Number,
        default: 0.00,
        },
        type: {
         type: String,
        enum: ['deposit', 'withdrawal', 'interest', 'gain', 'loss', 'balance'],
        },
      }
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
    status: {
      type: String,
      enum: ['created', 'updated', 'closed'],
      default: 'updated',
    },
  },
    { timestamps: true }
)

module.exports = mongoose.model('Account', accountSchema)
