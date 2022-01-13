// node js 30 no video  connect mysql server with node js

var mysql =require('mysql');

var databaseconnectionconfigaration={  //akhane {} mane hocche node js ar object...ai node js ar object ar moddhe 3 ta peramiter dichi jemon host,user,password....ai peramiter gulo mysql server ar shathe connect korbe node js ke
    host="192.168.0.105",
    user="root",
    password="dipdip2020"
} 

var connection= mysql.createConnection(databaseconnectionconfigaration);

connection.connect(function(error){
    if(error){
        console.log("connection fail");
    }
    else{
        console.log("connection success")
    } 
});




