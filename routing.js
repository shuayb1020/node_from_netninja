var http =  require('http');
var fs = require('fs');



var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    }else if (req.url === '/data'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        
        var myObj = {
            name: 'Shuayb',
            job: 'FrontendDev',
            age: 12
        };
        res.end(JSON.stringify(myObj))
    }else if (req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    }else{
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/error.html').pipe(res);
    }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000')