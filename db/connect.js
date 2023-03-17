const mongoose = require('mongoose')
//change password and folder name

const connectDB = (url) => {
    return mongoose.connect(url,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify:false,
            useUnifiedTopology: true,
        })
}
module.exports = connectDB
