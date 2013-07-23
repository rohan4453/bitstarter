var express = require('express');

var fs = require('fs'); 

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  
    var newData = '';
    fs.readFile('./index.html','utf8',function(err, data){
	response.send(data.toString());
    });

    //response.send(newData);
    //console.log(newData);

    //response.send('Hello World2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
