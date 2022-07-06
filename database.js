const mongoose = require('mongoose')
require('dotenv').config({})

mongoose.connect(process.env.DB_PASS)

module.exports = {
    mongoose,
}