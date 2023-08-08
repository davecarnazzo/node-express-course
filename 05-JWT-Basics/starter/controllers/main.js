// check username, password in post(login) request
// if exist create new JWT
// send back to front-end
// setup authentication so only the request with JWT can access the dashboard

const jwt = require('jsonwebtoken')
const { BadRequestError } = require('../errors')

const login = async (req, res) => {
    const {username,password} = req.body
    // mongoose validation (model "required")
    // Joi
    // check in the controller

    if(!username || !password) {
    throw new BadRequestError('Please provide username and password')
    }

    // just for demo, value normally provided by DB !!!!
    const id = new Date().getDate()

    // keep payload small, better experience for user
    // just for demo, in production use long, complex and unquessable string value!!!
    const token =jwt.sign({ id, username }, process.env.JWT_SECRET,{
        expiresIn:'30d'
    })

    res.status(200).json({msg: 'user created', token})
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)       

    res.status(200).json({
        msg: `hellow, ${req.user.username}`,
        secret:`here is your authrized data, your lucky number is ${luckyNumber}`,
    })
}

module.exports = {
    login,
    dashboard,
}
