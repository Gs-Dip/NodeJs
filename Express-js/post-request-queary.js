// node js 88 no video (Post Request With URL Query )

var express = require('express');

app=express();

app.post("/",function(req,res){
    let firstname=req.query.firstname;
    let lastname=req.query.lastname;

    res.end(firstname+" "+lastname);
});

app.listen(5000);
console.log("server run success");