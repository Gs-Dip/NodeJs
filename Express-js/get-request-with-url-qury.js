// Get Request With URL Query node js 85 no video important
var express=require('express');

app= express();

app.get("/",function(req,res){
    let firstname=req.query.firstname; //http://localhost:4000?firstname=dibbo&lastname=ghosh jokhon amra url a firstname=ja dibo na lastname=ja dibo ta firstname and lastname peramiter ar modhhe store hobe   
    let lastname=req.query.lastname;
    res.end(firstname+" "+lastname); //akhane firstname and lastname ar valu gulo response ar body te diye diyechi and +" "+ ai ta diye firstname and lastname ar moddhe space diyechi 
 });


app.listen(4000);
console.log("server run success");