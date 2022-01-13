// node js 91 no video (post request with Form Data) multipart form data ke handel korar jonno

 
var express=require('express');
var multer=require('multer');//  multipart form data ke handel korar jonno multer npm   application  ar moddhe install kore nite hobe ai command diye  npm install --save multer
var app=express();
var multer=multer();


app.use(multer.array());
app.use(express.static('public'));


app.post("/",function(req,res){
    let jsondata=req.body; // req.body call korar maddhome amra json data pabo
    let output=JSON.stringify(jsondata);//  json data ta output akare dekhar  jonno ati bebohar kora hoyeche JSON.stringify(jsondata);
    res.end(output);

});


app.listen(5000);
console.log("server run success")