var express = require('express');

var fs = require('fs'); 

var app = express.createServer(express.logger());

/*
var read = function(){
    fs.readFile('./index.html','utf8' , function(err,data){
	if(err) throw err;
	var newData = data.toString();
	//console.log(newData);
	return newData;
    });
};
   
*/



app.get('/', function(request, response) {
  
    var newData = '';
    fs.readFile('./index.html','utf8',function(err, data){
	newData = data.toString();
    });

    response.send(newData);
    console.log(newData);

    //response.send('Hello World2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
