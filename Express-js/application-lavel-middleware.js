// node js 95 no video application level middleware. chack note book for know what is application level middleware    

var express = require("express");
app=express()

app.use(function(req,res,next){ //akhane application level middleware ar kaj kora hoyeche.next diye bojhano hocche request  ar por middleware theke next hoye response a jabe ba response dekhabe   
    console.log("i am application level middleware")
    next()
});


app.get("/",function(req,res){
    res.end("this is home page")
});


app.get("/contact",function(req,res){
    res.end("this is contact page")
});


app.get("/about",function(req,res){
    res.end("this is about page")
});


app.listen(7000);
console.log("server run success")