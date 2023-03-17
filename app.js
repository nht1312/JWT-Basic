const express = require('express')
require('express-async-errors')
const app = express()
require('dotenv').config()
const connectDB = require('./db/connect')
const notFoundHandler = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//middlewares
app.use(express.json())

//routes
app.get('/', (req, res) => {
    res.send('<h1>Store API </h1> <a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', productsRouter)

//product routes
app.use(notFoundHandler)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
const start = async () => {
    try {
        //connect to database
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`Listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()