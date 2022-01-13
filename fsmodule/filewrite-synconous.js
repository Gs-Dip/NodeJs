// node js 17 no video
var http=require('http')
var fs =require('fs')


var server=http.createServer(function(req,res){
    if(req.url=="/"){
        let error=fs.writeFileSync('demosync.text','it is demosync file')

        if(error){
            res.writeHead(200,{'Contant-Type':'text/html'})
            res.write("file write fail")
            res.end()
        }
        else{
            res.writeHead(200,{'Contant-Type':'text/html'})
            res.write("file write success")
            res.end()
        }
    }
});

server.listen(5050);
console.log("server start successfully");
