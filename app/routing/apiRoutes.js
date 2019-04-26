var path = require("path");
var fs = require('fs');
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.sendFile(path.join(__dirname,"../data/friends.js"));
  });
var friendsArray = [];

  app.post("/api/friends", function(req, res){  
  // Find the best match before adding them to the app so they aren't matched with themselves
    const matchBest = findFriends(req.body, friendsArray);
    //Cannot add them then compare because there is no unique identifier. There is nothing stopping the user from using the same name or profile pic as another user.
    friendsArray.push(req.body);
    res.json(matchBest);
  });
  //Finding friend with the least difference
  const findFriends = (user, friendsArray) => {
    //Look through all the friends and find a match with the lowest difference
    let matchBest = {};
    //Difference last is defined outside to persist over each friend
    let lastDiff = 0;
    friendsArray.forEach((friend, friendIndex) => {
      let answerDiff = 0;
      //The answers array comes in a string, converted into a number to find the difference
      friend.answers.forEach(
        (answer, index) =>
          (answerDiff += Math.abs(+answer - +user.answers[index]))
      );
      if (answerDiff < lastDiff) {
        matchBest = friend;
        //Need else if so first friend isn't skipped
      } else if (friendIndex === 0) {
        matchBest = friend;
      }
      lastDiff = answerDiff;
    });
    return matchBest;
  };
};
