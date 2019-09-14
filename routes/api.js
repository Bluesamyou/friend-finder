var express = require("express");
var router = express.Router();

var friends = [
    {
        name: "Adam",
        image: "",
        scores: [1, 2, 3, 2, 3, 4, 3, 2, 5, 3]
    },
    {
        name: "Monica",
        image: "",
        scores: [1, 3, 2, 5, 1, 2, 5, 5, 4, 5]
    },
    {
        name: "Steve",
        image: "",
        scores: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
    },
    {
        name: "Chanelle",
        image: "",
        scores: [2, 3, 5, 1, 2, 3, 5, 5, 3, 3]
    },
    {
        name: "Bridget",
        image: "",
        scores: [2, 3, 5, 3, 4, 5, 1, 1, 1, 2]
    }
]

router.get("/friends", function (req, res) {
    res.send("coming sooon")
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