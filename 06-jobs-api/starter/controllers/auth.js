const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError, UnauthenticatedError} = require('../errors')

const register = async (req, res) => {
//    res.send('register user')
    const user = await User.create({...req.body})
    const token = user.createJWT()
    res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token })
    console.log('token success');
}

const login = async (req, res) => {
    // res.send(' login user')
    const { email, password } = req.body
    
    if ( !email || !password ) {
        throw new BadRequestError('Please provide email and password')
    }
    const user = await User.findOne({email})
    if (!user) {
        throw new UnauthenticatedError('Invalid Credentials/email')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if (!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid Credentials/Password')
    }
    // compare password
    
    const token = user.createJWT()
    res.status(StatusCodes.OK).json({user: {name: user.name}, token })
}

module.exports = {
    register,
    login,
}