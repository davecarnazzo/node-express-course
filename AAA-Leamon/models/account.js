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
    balance:{
      type: Number,
      default: 0.00,
    },
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
