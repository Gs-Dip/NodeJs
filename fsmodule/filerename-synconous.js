// node js 19 no video
var http =require('http');
var fs =require('fs');



var server = http.createServer(function(req,res){
    if(req.url=="/"){
        let error =fs.renameSync('demosync.text','demosynco.text');  //demosync.text aita hocche file ar puraton nam and demosynco.text hocche file ar notun name jei ta ami rename korte chcchi and function(error) ai function ar error peramiter ar karone amra error dhorte parbo jodi kono error ashe rename korte giye
        if(error){
            res.writeHead(200,{'Contant-Type':'text/html'});
            res.write("file rename fail");
            res.end();
        }
        else{
            res.writeHead(200,{'Contant-Type':'text/html'});
            res.write("file rename success");
            res.end();
        }
    }
});

server.listen(4030);
console.log("server start successfully");