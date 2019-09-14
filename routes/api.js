var express = require("express");
var router = express.Router();

var friends = [
    {
        name: "Adam",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        scores: [1, 2, 3, 2, 3, 4, 3, 2, 5, 3]
    },
    {
        name: "Monica",
        image: "https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        scores: [1, 3, 2, 5, 1, 2, 5, 5, 4, 5]
    },
    {
        name: "Steve",
        image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Chanelle",
        image: "https://images.unsplash.com/photo-1548958921-c5c0fe1b307d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        scores: [2, 3, 5, 1, 2, 3, 5, 5, 3, 3]
    },
    {
        name: "Bridget",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        scores: [2, 3, 5, 3, 4, 5, 1, 1, 1, 2]
    }
]

router.get("/friends", function (req, res) {
    res.send(friends)
})

router.post("/friends", function (req, res) {
    var answersArr = []
    var friendsArray = []
    var differenceArray = []
    Object.keys(req.body).forEach(function (key) {
        answersArr.push(req.body[key])
    })

    userTotal = answersArr.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue))
    friends.forEach(function (friend) {
        friendsArray.push(friend.scores.reduce((accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue)))
    })

    friendsArray.forEach(function (score) {
        differenceArray.push(Math.abs(score - userTotal))
    })

    res.status(200).json(friends[differenceArray.indexOf(Math.min(...differenceArray))])
});

module.exports = router;