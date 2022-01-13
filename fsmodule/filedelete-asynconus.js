// node js 20 no video
var http =require('http')
var fs =require('fs')



var server = http.createServer(function(req,res){
    if(req.url=="/"){
        fs.unlink('demoasync.text',function(error){   //file delete korar jonno unlink method bebohar korte hobe and je file ta delete korte chacchi tar path ta bole dite hobe jemon akhane ami demoasync.text ai file ta delete korbo  and function(error) ai function ar error peramiter ar karone amra error dhorte parbo jodi kono error ashe delete  korte giye
            if(error){
                res.writeHead(200,{'Contant-Type':'text/html'});
                res.write("file delete fail");
                res.end();
            }
            else{
                res.writeHead(200,{'Contant-Type':'text/html'});
                res.write("file delete success");
                res.end();
            }
        });
    }
});

server.listen(4020);
console.log("server start successfully")