//node js 86 no video
// Working With Get Request Header
var express=require('express');

app=express();


app.get("/",function(req,res){
    let firstname=req.header('firstname'); // req.header('firstname'); akhane request header ar je poparti ta dhorte chacchi tar nam dite hobe jemon akhane ami  ('firstname') request header ar firstname ke dhorchi
    let lastname=req.header('lastname');
    res.end(firstname+" "+lastname); //akhane firstname and lastname ar valu gulo response ar body te diye diyechi and +" "+ ai ta diye firstname and lastname ar moddhe space diyechi 
});


app.listen(8000);
console.log("server run success");