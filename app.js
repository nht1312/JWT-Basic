require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()

const mainRouter = require('./routes/main')
const notFoundHandler = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middlewares
app.use(express.json())
app.use(express.static('./public'))

//routes
app.use('/api/v1', mainRouter)

//product routes
app.use(notFoundHandler)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        app.listen(port,console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()