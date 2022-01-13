var express=require('express');

app= express();

app.get("/",function(req,res){
    res.send("this is simple get request") // akhane res.send dile o hoy and res.end dileo hoy
});


app.listen(4000);
console.log("server run success");