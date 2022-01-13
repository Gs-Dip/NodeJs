// node js 89 no video (Post Request With Header)

var express = require('express');

app=express();


app.post("/",function(req,res){
    let username=req.header('username');
    let password=req.header('password');

    res.end("username="+username+"  "+"password="+password);

});


app.listen(7000);
console.log("server run success");