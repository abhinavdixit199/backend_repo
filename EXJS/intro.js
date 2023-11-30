var express = require("express")
var app= express();
// app.get(route,callback_function) where callback function has two paremeter(req,res).."/" in route represent homepage
app.get("/",(req,res)=>{
    res.send("Hello from the server lala side");// if you have to write two lines you can use res.write() instead of res.send
})
// 
app.get("/about",(req,res)=>{
    res.send("Hello from the about2 side")
})
app.listen(3000,()=>{
    console.log("listenig to the port")    
})

// one of the main advantage of using express js is that you do not have to use if else statement rather it follows a top bottom
// approach where it print the message which is above in order