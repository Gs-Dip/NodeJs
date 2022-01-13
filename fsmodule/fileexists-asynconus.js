// node js 23 no video
var http =require('http')
var fs =require('fs')



var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.exists("demoasync.text",function(result){   //asynconus podhotite directory ar moddhe kono file ache ki na ta janar jonno exists method bebohar kora hoy.jemon ami dekhte chacchi demoasync.text ai file ta ache ki na. 
            if(result){
                res.end("true");
            }
            else{
                res.end("false");
            }
        });
    }
});

server.listen(4020);
console.log("server start successfully")