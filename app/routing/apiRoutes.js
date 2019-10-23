// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic

var friends = require("../data/friends");

module.exports = function (app, path) {


    // Displays all friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });

    // Create New friends - takes in JSON input
    app.post("/api/friends", function (req, res) {
        var newFriend = req.body;
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
// most compatible object
var bestMatch = {};
// for loop to loop through friends and scores from value
for (i=0; i< newFriends..length; i++){

}

        console.log(newFriend);

        friends.push(newFriend);

        res.json(newFriend);
    });

};
// To do: set up function(s) for incoming survey