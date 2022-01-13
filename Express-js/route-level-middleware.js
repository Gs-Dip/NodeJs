// node js 96 no video  route level middleware
var express = require('express');
app=express();


app.get("/",function(req,res){
    res.end("this is home page")
});


app.get("/about",function(req,res){
    res.end("this is about page")
});


app.use("/contact",function(req,res,next){ //akhane route level middleware ar kaj kora hoyeche and "/contact" diye bola hoyeche je shudhu contact route ar jonno middleware excute hobe and next diye bojhano hocche request  ar por middleware theke next hoye response a jabe ba response dekhabe 
    console.log("this is contact middleware")
    next() // akhane next peramiter ke excute kora hoyeche
});

app.get("/contact",function(req,res){
    res.end("this is contact page")
});



app.listen(4000);
console.log("server run success");