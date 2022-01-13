// node js 16 no video
var http =require('http');
var fs =require('fs');



var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.writeFile('demo.text','hello world',function(error){   // demo.text name akta file create hobe abong oi file ar moddhe  hello world lekhata insert hoye jabe abong file write korar somoy jodi kono error ashe tahole function(error) ai function ar maddome error ta dhorte parbo
            if(error){
                res.writeHead(200,{'Contant-Type':'text/html'});
                res.write("file write fail")
                res.end()
            }
            else{
                res.writeHead(200,{'Contant-Type':'text/html'});
                res.write("file write success")
                res.end()
            }
        });
    }
});

server.listen(2020);
console.log("server start successfully")