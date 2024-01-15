const Trade = require('../models/Trade')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, NotFoundError} = require('../errors')

const getAllTrades = async (req, res) => {
    const trades = await Trade.find({createdBy: req.user.userId }).sort('createdAt')
    res.status(StatusCodes.OK).json({ trades, count: trades.length })
}

const getTrade = async (req, res) => {
    const{
        user: { userId },
        params: { id: tradeId }
    } = req

    const trade = await Trade.findOne({
        _id: tradeId, 
        createdBy: userId
    })
    if(!trade) {
        throw new NotFoundError(`no trade with id ${tradeID}`)
    }
    res.status(StatusCodes.OK).json({ trade })
}

const createTrade = async (req, res) => {
    req.body.createdBy = req.user.userId
    const trade = await Trade.create(req.body)
    res.status(StatusCodes.CREATED).json(trade)
}

const updateTrade = async (req, res) => {
    const {
        body:   { tradeName, position },
        user:  { userId },
        params: { id: tradeId },
    } = req

    if(tradeName === '' || position === '') {
        throw new BadRequestError('Company or Position fields cannot be empty')
    }

    const trade = await Trade.findByIdAndUpdate({_id:tradeId, createdBy:userId}, req.body, {new:true,runValidators:true})
    
    if(!trade) {
        throw new NotFoundError(`no trade with id ${tradeId}`)
    }
    res.status(StatusCodes.OK).json({ trade })
}

const deleteTrade = async (req, res) => {
    const {
        user:  { userId },
        params: { id: tradeId }
    } = req

    const trade = await Trade.findByIdAndRemove({
        _id: tradeId,
        createdBy: userId
    })
    if(!trade) {
        throw new NotFoundError(`no trade with id ${tradeId}`)
    }
    res.status(StatusCodes.OK).send()
    //res.status(StatusCodes.OK).json({ trade })
}

module.exports = {
    createTrade, 
    getOwned,
    getAllTrades, 
    getActiveTrades,
    GetHistoricalTrades,
    getTradesBySymbol,
    getLinkedTrades,
    getTradesByDateRange,
    updateTrade, 
    getTrade, 
} 
