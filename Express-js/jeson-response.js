// node js video series 77 no video
var express=require('express');

app=express();


app.get("/",function(req,res){  
    res.send("home page")  
});

app.post("/about",function(req,res){  
    res.send("about page") 
});


app.get("/contact",function(req,res){   
    res.status(401).end("not found");  
});


// json response
app.get("/jeson",function(req,res){  //amra akhane http ar jotogulo request ache sob bebohar korte pari jemon get,post,put,delete kintu amader browser ar functionality shudhu get request access korte pare..tai amra amader get route ta kei shudhu amader browser diye check korte parbo...ta chara onno sokol request jemon post put delete agulo thikh thakh kaj korche ki na ta amra post man ar maddome dekhte pari
    let jeson=[ //akhane let diye jeson name akta veriable create kore niyechi and tar moddhe akta array niyechi[] and array ar moddhe object niyechi {}....array ar moddhe onek gulo object thakte pare.....json format a data key value hishebe thake        {
        {
            name:"dipghosh", 
            city:"faridpur",
            occupation:"student"
        }, 

        {
            name:"dibboghosh",
            city:"faridpur",
            occupation:"student"
        } 
    ]

    res.json(jeson); //json formate a response genarate korte hole  res.json likhte hobe and ai () ar moddhe oporer variable pass kore dite hobe 
});



app.listen(4020);
console.log("server run success");