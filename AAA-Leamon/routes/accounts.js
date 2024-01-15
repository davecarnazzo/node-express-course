const express = require('express')

const router = express.Router()
const {
    createAccount, 
    deleteAccount,
    getAllAccounts, 
    updateAccount, 
    getAccount, 
} = require('../controllers/accounts')

router.route('/').post(createAccount).get(getAllAccounts)

router.route('/:id').get(getAccount).delete(deleteAccount).patch(updateAccount)

module.exports = router