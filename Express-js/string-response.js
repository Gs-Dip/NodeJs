// node js video series 75 no video
var express=require('express');

app=express();


app.get("/",function(req,res){  //amra akhane http ar jotogulo request ache sob bebohar korte pari jemon get,post,put,delete kintu amader browser ar functionality shudhu get request access korte pare..tai amra amader get route ta kei shudhu amader browser diye check korte parbo...ta chara onno sokol request jemon post put delete agulo thikh thakh kaj korche ki na ta amra post man ar maddome dekhte pari
    res.send("home page") //string response ar khettre res.send  ooo bebohar kora jai and res.end ooo bebohar kora jai...tobe res.send mane response ar body bojhai and res.end mane response ar ending point bojhai
});

app.post("/about",function(req,res){  //"/about" hocche routing point ar nam
    res.send("about page") //string response ar khettre res.send  ooo bebohar kora jai and res.end ooo bebohar kora jai...tobe res.send mane response ar body bojhai and res.end mane response ar ending point bojhai
});



app.listen(4020);
console.log("server run success");