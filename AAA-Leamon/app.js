//require('dotenv').config()
//require('express-async-errors')
// async errors

const express = require('express')
const app = express()

console.log(globalThis === globalThis.globalThis); // true (everywhere)
//console.log(window === window.window); // true (in a browser)
//console.log(self === self.self); // true (in a browser or a Web Worker)
//console.log(frames === frames.frames); // true (in a browser)
console.log(global === global.global); // true (in Node.js)


const port = process.env.PORT || 55000

const start = async () => {
    try {
    // connectDB
//    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()