// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic
var friends = require("../data/friends");

module.exports = function (app, path) {

    console.log(newFriend);


    //     // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    //     // Create New friends - takes in JSON input
    app.post("/api/friends", function (req, res) {

        // most compatible object
        var bestMatch = {};
        // for loop to loop through friends and scores and parses the scores
        for (i = 0; i < newFriends.scores.length; i++) {
            newFriends.scores[i] = parseInt(newFriend.scores[i])
        };
        var friendScore = 0;

        var scoreDifference = 40;
// nexted loop to get total scores for each friend
        for (i=0; i< friends.length; i++){
            for (var ii = 0; ii < friends[i].scores.length; ii++){
                
            }
        }
        // //         console.log(newFriend);

        // //         friends.push(newFriend);

        // //         res.json(newFriend);
        //     });

    });
};
// To do: set up function(s) for incoming survey