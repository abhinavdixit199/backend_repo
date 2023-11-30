const path= require("path")
const express=require("express")
const app=express();

// const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../template");
app.set("view engine","hbs")
app.set("views",templatePath);
app.get("/",(req,res)=>{
    res.render("index")

})
app.get("/about",(req,res)=>{
    res.send("Hello from the server lala side");
}) 
app.listen(3000,()=>{
    console.log("listenig to the port")    
})