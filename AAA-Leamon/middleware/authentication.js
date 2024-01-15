const User = require('../models/User')
const jwt  = require('jsonwebtoken')
const { UnauthenticatedError } = require('../errors')


const auth = async (req, res, next) => {
// check header
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('Authentication Invalid - Bearer')
    }
    const token = authHeader.split(' ')[1]
    try {
        console.log('tell me about it');
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        // attach the user to the job routes
        console.log(payload);
        req.user = { userId: payload.userId, name: payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid - payload')
    }
}

module.exports = auth
