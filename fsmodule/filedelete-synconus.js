// node js 21 no video
var http = require('http');
var fs = require('fs');


var server =http.createServer(function(req,res){
    if(req.url=="/"){
        let error=fs.unlinkSync('demosynco.text'); //synconus podhotite file delete korar jonno unlinksync method bebohar korte hobe and je file ta delete korte chacchi tar path ta bole dite hobe jemon akhane ami demosynco.text ai file ta delete korbo
        if(error){
            res.writeHead(200,{'Contant-Type':'text/html'});
            res.write("file delete fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Contant-Type':'text/html'});
            res.write("file delete  success");
            res.end();
        }
    }
});

server.listen(4050);
console.log("server start successfully");