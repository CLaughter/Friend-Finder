var friends = require("../data/friends.js");

module.exports = function(app) {
  app.get("/api/friends", function (req,res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req,res) {
    console.log(req.body);
    // var totalDifference = 0;
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

  var smallestDiff = 1000;
  var userData = req.body;
  var userName = userData.name;
  var userScores = userData.score;
  console.log("Best match friend difference " + bestMatch.friendDifference);
  console.log("=======================");

  for(var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    var totalDifference = 0;
    
    friends[i].score.forEach(function(number, index) {
      totalDifference += Math.abs(number - userScores[index]);
    })
    if(totalDifference <= smallestDiff) {
      bestMatch = friends[i];
      smallestDiff = totalDifference;
    }
    console.log(totalDifference + " TotalDifference");
  }
console.log(userName)
  console.log(bestMatch);
  console.log(friends);
  // friends.push(userData);
  console.log("New User added");
  console.log(userData);
  res.json(bestMatch);
  });
};