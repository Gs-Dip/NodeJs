var express=require('express');
var multer=require('multer'); //multipart formdata ke handel korar jonno multer connect ba inport korte hoy


app=express('express');


var storage=multer.diskStorage({
    destination:function(req,file,callBack){
        callBack(null,'./upload')// akhane ./upload mane bojhano hocche file ta kotthai upload hobe othhat kon derectory te upload hobe  
    },
    filename:function(req,file,callBack){
        callBack(null,file.originalname);
    }
});



var upload=multer({storage:storage}).single('myfile')// body ar moddhe formdata ar key ar nam myfile dite hobe file type text theke file kore nite hobe and myfile key ar value ar moddhe file diye dite hobe

app.post("/",function(req,res){
    upload(req,res,function(error){
        if(error) {
            res.end("file upload fail")

        } 
        else{
            res.end("file upload success")
            
        }     
    });
});

app.listen(4000);
console.log("server run success")