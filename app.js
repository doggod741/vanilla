var express = require('express');
var app = express();
var port = 4444;
var path = require('path');
app.listen(port, function(err, res){
if(err){
	console.log("there is an error...");
}
else{
	console.log("server started");
}
});
console.log("yurrrr");

app.get('/', function(req, res){
	res.sendFile(path.join(__dirname + '/vanilla.html'));
});

app.get('/js/three.min.js', function(req, res){
	res.sendFile(path.join(__dirname + '/js/three.min.js'));
});

app.get('/js/OrbitControls.js', function(req, res){
        res.sendFile(path.join(__dirname + '/js/OrbitControls.js'));
});
