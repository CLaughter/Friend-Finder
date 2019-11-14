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

  // var b = userScores.map(function(item) {
  //   return parseInt(item, 10);
  // });
  // userData = {
  //   name: req.body.name,
  //   photo: req.body.photo,
  //   scores: b
  // };

  // console.log("Name: " + userName);
  // console.log("User Score: " + userScores);

  // var sum = b.reduce((a, b) => a + b, 0);

  // console.log("Sum of user's score " + sum);
  console.log("Best match friend difference " + bestMatch.friendDifference);
  console.log("=======================");

  for(var i = 0; i < friends.length; i++) {
    console.log(friends[i]);
    var totalDifference = 0;
//     console.log("Total difference " + totalDifference);
//     console.log("Best match friend difference " + bestMatch.friendDifference);
// console.log(friends[i].score);
//     var bFriendScore = friends[i].score.reduce((a, b) => a + b, 0);
//     // console.log ("Total friend score " + bFriendScore);
//     totalDifference += Math.abs(sub - bFriendScore);
//     console.log("------------------------------> " + totalDifference); 
    friends[i].score.forEach(function(number, index) {
      totalDifference += Math.abs(number - userScores[index]);
    })
    if(totalDifference <= smallestDiff) {
      bestMatch = friends[i];
    }
    console.log(totalDifference + " TotalDifference");
  }

  console.log(bestMatch);
  console.log(friends);
  // friends.push(userData);
  console.log("New User added");
  console.log(userData);
  res.json(bestMatch);
  });
};