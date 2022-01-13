// node js 15 no video
var fs =require('fs');
var http =require('http');


var server=http.createServer(function(req,res){
    if(req.url="/"){
        // SYNCONOUS
        let mydata =fs.readFileSync('index.html');  //let mane variable
        res.writeHead(200,{'Contant-Type':'text/html'});
        res.write(mydata);
        res.end();
    }

});

server.listen(4040);
console.log("congratulation server start successfully");
