// node js 87 no video  about post request

var express=require('express');

app=express();

app.post("/",function(req,res){
    res.end("this is simple post request");

});




app.listen(4000);
console.log("server run success");