const Account = require('../models/Account')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllAccounts = async (req, res) => {
    const accounts = await Account.find({createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ accounts, count: accounts.length })
}

const getAccount = async (req, res) => {
    const{
        user: { userId },
        params: { id: accountId }
    } = req

    const account = await Account.findOne({
        _id: accountId, 
        createdBy: userId
    })
    if(!account) {
        throw new NotFoundError(`no account with id ${accountID}`)
    }
    res.status(StatusCodes.OK).json({ account })
}

const createAccount = async (req, res) => {
    req.body.createdBy = req.user.userId
    const account = await Account.create(req.body)
    res.status(StatusCodes.CREATED).json(account)
}

const updateAccount = async (req, res) => {
    const {
        body:   { accountName, position },
        user:  { userId },
        params: { id: accountId },
    } = req

    if(accountName === '' || position === '') {
        throw new BadRequestError('Company or Position fields cannot be empty')
    }

    const account = await Account.findByIdAndUpdate({_id:accountId, createdBy:userId}, req.body, {new:true,runValidators:true})
    
    if(!account) {
        throw new NotFoundError(`no account with id ${accountId}`)
    }
    res.status(StatusCodes.OK).json({ account })
}

const deleteAccount = async (req, res) => {
    const {
        user:  { userId },
        params: { id: accountId }
    } = req

    const account = await Account.findByIdAndRemove({
        _id: accountId,
        createdBy: userId
    })
    if(!account) {
        throw new NotFoundError(`no account with id ${accountId}`)
    }
    res.status(StatusCodes.OK).send()
    //res.status(StatusCodes.OK).json({ account })
}

module.exports = {
    getAllAccounts,
    getAccount,
    createAccount,
    updateAccount,
    deleteAccount,
} 