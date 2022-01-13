// node js 22 no video
var http = require('http');
var fs = require('fs');


var server =http.createServer(function(req,res){
    if(req.url=="/"){
        let result=fs.existsSync('demosynco.text');//synconus podhotite directory ar moddhe kono file ache ki na ta janar jonno existsSync method bebohar kora hoy.jemon ami dekhte chacchi demosynco.text ai file ta ache ki na. 
        if(result){
            res.end("true");
        }
        else{
            res.end("false");
        }
    }
});

server.listen(4050);
console.log("server start successfully");