var express = require('express');
var app = express();
var path = require("path");
var mongoose = require('mongoose');
var dbName = "cyradar";

app.use(express.static('public'));

app.get('/hello', function (request, response) {
    response.render('index.html');
});

app.get('/api/stats', function (request, response) {
    response.send({name: "hehe"});
});

// app.listen(8000, function () {
//     console.log('Express server started!!!');
// });

// mongoose.connect(`mongodb://localhost:27017/${dbName}`);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//
//   var spamSchema = mongoose.Schema({
//     dataArray: Array
//   });
//
//   var Spam = mongoose.model('Spam', spamSchema);
//
//   app.get('/api/stats', function(req, res) {
//     Spam.find(function(err, spams) {
//       if(err) {
//         res.send(err);
//       }
//       res.json(spams);
//     })
//   });
//
// });

// app.get('*', function(req, res) {
//             res.sendFile('index.html', {root: 'public'}); // load our public/index.html file
//         });
// app.listen(3000);

// var port = 3000;
// var serverUrl = "localhost";
//
// var http = require("http");
// var path = require("path");
// var fs = require("fs");
//
// console.log("Starting web server at " + serverUrl + ":" + port);
//
http.createServer( function(req, res) {

	var now = new Date();

	var filename = "index.html";
  console.log(filename);
	var ext = path.extname(filename);
  console.log(ext);
	var localPath = __dirname + '/public/';
	var validExtensions = {
		".html" : "text/html",
		".js": "application/javascript",
		".css": "text/css",
		".txt": "text/plain",
		".jpg": "image/jpeg",
		".gif": "image/gif",
		".png": "image/png"
	};
	var isValidExt = validExtensions[ext];

	if (isValidExt) {

		localPath += filename;
		fs.exists(localPath, function(exists) {
			if(exists) {
				console.log("Serving file: " + localPath);
				getFile(localPath, res, isValidExt);
			} else {
				console.log("File not found: " + localPath);
				res.writeHead(404);
				res.end();
			}
		});

	} else {
		console.log("Invalid file extension detected: " + ext)
	}

}).listen(port, serverUrl);

function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			res.setHeader("Content-Type", mimeType);
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}
