const express = require('express')
const api = routes('./routes/api')

// initialise express
const app = express()

// Setup port
const PORT = 3000 || process.env.PORT

// setup middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api', api)


// Create route for main page
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './pages/index.html'))
})


// Initialise server to listen on PORT
app.listen(PORT, function (err) {
    if (err) throw err

    console.log(`Magic happens on port : ${PORT}`)
})