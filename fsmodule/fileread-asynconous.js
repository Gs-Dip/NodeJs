// node js 14 no video
var fs =require('fs');
var http =require('http');


var server=http.createServer(function(req,res){
    if(req.url="/"){
        // ASY
        fs.readFile('index.html',function(error,data){
            res.writeHead(200,{'Contant-Type':'text/html'});
            res.write(data);
            res.end();
        });
    }

});

server.listen(4040);
console.log("congratulation server start successfully");
