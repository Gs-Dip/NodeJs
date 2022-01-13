// node js 90 no video (Working with JSON Body). jeson body ke manage korar jonno application ar moddhe body-parser ar npm install korte hobe. ai command diye npm install body-parser


var express=require('express') // jehetu ami express js diye kaj korchi tai akhane express js ke connect ba inport korechi
var bodyparser= require('body-parser');  //json body ke manage korar jonno akhane body-parser ke connect ba  inport  kora hoyeche.  
const { json } = require('body-parser');  //ai line ta likhte hobe na ai line ta outometically chole ashbe  

app=express();

app.use(bodyparser.json()); //akhane app theke bodyparser ar json ke bebohar korechi 

app.post("/",function(req,res){
    var jsondata=req.body; //req.body ar maddome amra jei data ta json body ar moddhe likhbo shei data ta akhane niye ashbe and  jsondata  ar moddhe store kore rakhbe
    var output=JSON.stringify(jsondata);// req.body ar maddome amra je data ta pabo ta output aakare dekhar jonno JSON.stringify(); bebohar korte hobe 
    res.end(output);
});


app.listen(5000);
console.log("server run success");