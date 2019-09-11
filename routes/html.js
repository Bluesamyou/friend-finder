var path = require('path')
const express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/index.html'))
})

router.get('/survey', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/survey.html'))
})

router.get('/styles/styles.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/../pages/styles/styles.css'))
})

module.exports = router;