// node js 80 no video
var express=require('express');

app= express();

// response header a data key value hishebe save hoy jemon ("name","dip ghosh") and response header a data save korar jonno res.append() ai method bebohar korte hoy
app.get("/header",function(req,res){
    res.append("name","dip ghosh");
    res.append("city","faridpur");
    res.append("age","21");

    res.status(201).end("hello world") //akhane res.status(201) diye status code ke change ba menupulate korahoyeche  and .end("hello world") diye request end kora hoyeche and body te hello world lekha hoyeche  
});

app.listen(4000);
console.log("server run success");