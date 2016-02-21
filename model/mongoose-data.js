var mongoose = require('mongoose');
var dbName = "cyradar";

mongoose.connect(`mongodb://localhost/${dbName}`);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

exports.statList = function(gname, callback) {
  db.once('open', function() {
    var statSchema = new mongoose.Schema({
      country: String,
      data: String
    });
    var Stat = db.model('Stat', statSchema);
    Stat.find({
      'data': gname
    }, function(err, stats) {
      if (err) {
        onErr(err, callback);
      } else {
        mongoose.connection.close();
        console.log(stats);
        callback("", stats);
      }
    }); // end Team.find
  }); // end db.once open
};
