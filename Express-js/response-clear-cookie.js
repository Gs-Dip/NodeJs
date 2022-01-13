// node js 82 no video
var express=require('express');

app= express();

// cookie a data key value hishebe save hoy jemon ("name","dip ghosh") and cookie a data save korar jonno res.cookie() ai method bebohar korte hoy
app.get("/cookie",function(req,res){
    res.cookie("name","dip ghosh");
    res.cookie("city","faridpur");
    res.cookie("age","21");

    res.status(201).end("cookie set success") //akhane res.status(201) diye status code ke change ba menupulate korahoyeche  and .end("cookie set success") diye request end kora hoyeche and body te cookie set success lekha hoyeche  
});


// cookie clear ba delete korar jonno  res.clearCookie method bebohar korte hobe and  () ar moddhe key ar name likhe dite hobe jei key ta ami delete korte chacchi
app.get("/clearcookie",function(req,res){
    res.clearCookie("name");
    res.clearCookie("city");
    res.clearCookie("age");

    res.status(201).end("cookie clear success") //akhane res.status(201) diye status code ke change ba menupulate korahoyeche  and .end("cookie set success") diye request end kora hoyeche and body te cookie set success lekha hoyeche  
});

app.listen(4000);
console.log("server run success");