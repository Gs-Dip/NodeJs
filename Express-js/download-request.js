// node js video series 78 no video
var express=require('express');

app=express();


app.get("/",function(req,res){  //amra akhane http ar jotogulo request ache sob bebohar korte pari jemon get,post,put,delete kintu amader browser ar functionality shudhu get request access korte pare..tai amra amader get route ta kei shudhu amader browser diye check korte parbo...ta chara onno sokol request jemon post put delete agulo thikh thakh kaj korche ki na ta amra post man ar maddome dekhte pari
    res.send("home page") //string response and status code change ba manupulate ar khettre res.send  ooo bebohar kora jai and res.end ooo bebohar kora jai...tobe res.send mane response ar body bojhai and res.end mane response ar ending point bojhai
});

// download request genarate
app.get("/picture",function(req,res){
    res.download("./upload/download.png"); //download response generate korar jonno ai res.download method bebohar korte hobe and  ar modde ("./upload/download.png") je file ar path dekhiye debo jei file ta download hobe jokhon amra browser a giye localhost:4020/picture ai api hit korle download hoye jabe ai file ta
}); 



app.listen(4020);
console.log("server run success");