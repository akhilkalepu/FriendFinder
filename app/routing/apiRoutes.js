// Load Data
// =============================================================
var friends = require("../data/friends.js");


// Routes
// =============================================================
module.exports = function (app) {

    // API GET requests
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // API POST requests
    app.post("/api/friends", function (req, res) {

        // Create variables for user's answers and app's calculations
        var newFriendScores = req.body.scores;
        var scoresArray = [];
        var friendCount = 0;
        var bestMatch = 0;

        //For loop through the friends array from friends.js
        for (i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            //run through scores to compare friends
            for (j = 0; j < newFriendScores.length; j++) {
                totalDifference += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
            }

            //push results into scoresArray
            scoresArray.push(totalDifference);
        }

        friends.push(req.body);
    });
};