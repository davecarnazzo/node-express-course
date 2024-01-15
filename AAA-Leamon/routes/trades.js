const express = require('express')

const router = express.Router()
const {
    createTrade, 
    getOwnedSymbols,
    getAllTrades, 
    getActiveTrades,
    GetHistoricalTrades,
    getTradesBySymbol,
    getLinkedTrades,
    getTradesByDateRange,
    updateTrade, 
    getTrade, 
} = require('../controllers/accounts')

router.route('/').post(createAccount).get(getAllAccounts)

router.route('/:id').get(getAccount).delete(deleteAccount).patch(updateAccount)

module.exports = router