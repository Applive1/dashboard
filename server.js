var express = require('express');
var app = express();
var mongoose = require('mongoose');
var dbName = "cyradar";

app.use(express.static(__dirname + 'public'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(`mongodb://localhost:27017/${dbName}`);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  var spamSchema = mongoose.Schema({
    dataArray: Array
  });

  var Spam = mongoose.model('Spam', spamSchema);

  app.get('/api/stats', function(req, res) {
    Spam.find(function(err, spams) {
      if(err) {
        res.send(err);
      }
      var json = JSON.stringify(spams);
      res.send(json);
    })
  });

});

app.listen(8000);
