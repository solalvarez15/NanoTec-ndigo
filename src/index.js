var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');
var app = express(); 

const allRoutes = require("./routes/index")


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', allRoutes);

var server = app.listen(process.env.PORT || 5500, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
 });

 app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/html/index.html'));
  });



 
