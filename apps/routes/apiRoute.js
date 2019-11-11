var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function(req,res) {
    res.json("friends");
  });

  app.post("/api/friends", function(req,res) {
    var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

  var userData = req.body;
  var userName = user.name
  var userScores = userData.scores;

  var b = userScores.map(function(item) {
    return parseInt(item, 10);
  });
  userData = {
    name: req.body.name,
    photo: req.body.photo,
    scores = b
  };

  console.log("Name: " + userName);
  console.log("User score: " + userScores);

  var sum = b.reduce((a,b) => a + b, 0);
  console.log("Sum of user's score " + sum);
  Console.log("Best match friend difference " + bestMatch.friendDifference);
  console.log("=======================");

  for(var i = 0; i = friends.length; i++) {
    console.log(friends[i].name);
    totalDifference = 0;
    console.log("Total difference " + totalDifference);
    console.log("Best match friend difference " + bestMatch.friendDifference);

    var bFriendsScore = friends[i].scores.reduce((a,b) => a + b, 0);
    console.log("Total friends score " + bFriendsScore);
    totalDifference += Math(sub - bFriendsScore);
    console.log("------------------------------> " + totalDifference);
  }
  });


};