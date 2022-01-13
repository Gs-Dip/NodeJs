// node js 25 no video
var http =require('http');
var fs =require('fs');



var server = http.createServer(function(req,res){

    if(req.url=="/"){
        let data =fs.readFileSync('home.html','utf8'); //utf8 ata hocche cerektor set ...ai ta jodi amra na dei tahole real server bujte parbe na kon file she read korche....localhost  bujte parbe kintu real server bujte parbe na 
        res.end(data);
    }
    else if(req.url=="/contact"){
        let data=fs.readFileSync('contact.html','utf8');
        res.end(data);
    }
    else if(req.url=="/about"){
        let data=fs.readFileSync('about.html','utf8');
        res.end(data);
    } 
    else if(req.url=="/terms"){
        let data=fs.readFileSync('terms.html','utf8');
        res.end(data);
    }  

});

server.listen(8080) //jehetu amra ai application ke real server a deploy korbo tai akhane kono port dibo na. deploy korar por oo bydefult port number niye nebe 8080.
console.log("congratulation server start successfully");