const express = require('express')
const html = require('./routes/html')
const path = require('path')
const api = require("./routes/api")
// initialise express
const app = express()

// Setup port
const PORT = 3000 || process.env.PORT

// setup middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', html)
app.use('/api', api)

// Initialise server to listen on PORT
app.listen(PORT, function (err) {
    if (err) throw err

    console.log(`Magic happens on port : ${PORT}`)
})