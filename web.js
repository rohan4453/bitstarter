var express = require('express');

var fs = require('fs'); 

var app = express.createServer(express.logger());

var read = function(){
    fs.readFile('index.html', function(err,data){
	if(err) throw err;
	var newData = data.toString()
	//console.log(newData);
	return newData;
    })
};
   




app.get('/', function(request, response) {
 
    response.send(read());
    //response.send('Hello World2!');

 


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
