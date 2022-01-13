// node js video series 79 no video
var express=require('express');

app=express();

// redirect response
app.get("/bangladesh",function(req,res){  //amra akhane http ar jotogulo request ache sob bebohar korte pari jemon get,post,put,delete kintu amader browser ar functionality shudhu get request access korte pare..tai amra amader get route ta kei shudhu amader browser diye check korte parbo...ta chara onno sokol request jemon post put delete agulo thikh thakh kaj korche ki na ta amra post man ar maddome dekhte pari
    res.redirect("http://localhost:4020/india"); //akhane  http://localhost:4020/bangladesh  a  hit korle res.redirect("http://localhost:4020/india") ai method ta india raout a redirect kore dibe.
});

app.get("/india",function(req,res){  //amra akhane http ar jotogulo request ache sob bebohar korte pari jemon get,post,put,delete kintu amader browser ar functionality shudhu get request access korte pare..tai amra amader get route ta kei shudhu amader browser diye check korte parbo...ta chara onno sokol request jemon post put delete agulo thikh thakh kaj korche ki na ta amra post man ar maddome dekhte pari
    res.send("this is india");
});



app.listen(4020);
console.log("server run success");