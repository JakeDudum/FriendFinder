var friends = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {

    var scores = [];

    for (var i = 0; i < friends.length; i++) {
        var total = 0;
        for( var j = 0; j < friends[i].score.length; j++) {
            total += Math.abs(req.body.scores[j] - friends[i].score[j]);
        }
        scores.push(total);
    }

    var smlIndex = 0;
    var smallest = scores[0];

    for (var k = 1; k < scores.length; k++) {
        if (scores[k] < smallest) {
            smlIndex = k;
            smallest = scores[k];
        }
    }

    res.send(friends[smlIndex]);
  });
};
