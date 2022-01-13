// node js video series 69 no video
var express =require('express');

app=express();

app.get("/",function(req,res){
    res.send("hello express js")
});


app.listen(4040,function(){
    console.log("server run success")
});