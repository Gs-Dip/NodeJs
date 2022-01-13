var http=require('http')
var URL =require('url')
var server=http.createServer(function(req,res){
    myURL="https://github.com/rupomsoft/Node.js-Tutorial-Bangla" 

    var myURLOBJ = URL.parse(myURL,true);

    var hostname= myURLOBJ.host;
    var pathname= myURLOBJ.pathname;
    var searchname=myURLOBJ.search;

    res.writeHead(200,{'Contant-Type':'text/html'})
    res.write(hostname);
    res.end();

});

server.listen(5040);
console.log("congratulation server start successfully");