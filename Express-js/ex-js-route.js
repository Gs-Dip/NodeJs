// node js video series 72 no video
var express=require('express');

app=express();


app.get("/",function(req,res){  //amra akhane http ar jotogulo request ache sob bebohar korte pari jemon get,post,put,delete kintu amader browser ar functionality shudhu get request access korte pare..tai amra amader get route ta kei shudhu amader browser diye check korte parbo...ta chara onno sokol request jemon post put delete agulo thikh thakh kaj korche ki na ta amra post man ar maddome dekhte pari
    res.send("home page")
});

app.post("/about",function(req,res){
    res.send("about page")
});


app.put("/contact",function(req,res){
    res.send("contact page")
});

app.delete("/terms",function(req,res){
    res.send("terms page")
});

app.listen(4020);
console.log("server run success");