// const { CustomAPIError } = require('../errors') // used for the custom error but we replaced the code
const { StatusCodes } = require('http-status-codes')
const errorHandlerMiddleware = (err, req, res, next) => {
  
let customError = {
  // set default values
  statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  msg:err.message || 'Something went wrong try again later'
}
// this was a simple way to use mongo DB to handle errors but at a high level with a big error dump.
// if (err instanceof CustomAPIError) {
//     return res.status(err.statusCode).json({ msg: err.message })
// }

if(err.name === 'ValidationError') {
  //console.log(Object.values(err.errors))
  customError.msg = Object.values(err.errors).map((item)=>item.message).join(',')
  customError.statusCode = 400
}
if(err.code && err.code === 11000) {
  customError.msg = `Duplicate value entered for the '${Object.keys(err.keyValue)}' field with value of '${Object.values(err.keyValue)}', please choose another value`
  customError.statusCode = 400
}
if(err.name === 'CastError'){
  customError.msg = `No itme found with id: ${err.value}`
  customError.statusCode = 400
}
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err })  // this shows the json full dump error with keyValues (names)
  return res.status(customError.statusCode).json({ msg:customError.msg })
}

module.exports = errorHandlerMiddleware
