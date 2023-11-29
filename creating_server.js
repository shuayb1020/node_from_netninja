var http =  require('http');
var fs = require('fs');

// ceating a readable stream
// var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt' )
// myReadStream.on('data',function(chunk){
//     console.log('new chunk received:');
//     myWriteStream.write(chunk);
    
// });

// pipes


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt','utf-8');
    myReadStream.pipe(res); 
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');

// var server = http.createServer(function(req, res){
//     console.log('request was made: ' + req.url);
//     res.writeHead(200,{'Content-Type': 'text/plain'});
//     res.end('Hey Ninjas'); 
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');