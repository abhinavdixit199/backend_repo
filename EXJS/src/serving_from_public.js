const path= require("path")
const express=require("express")
const app=express();
const port=3000;

const staticPath = path.join(__dirname,"../public");// why should we write only public
app.set("view engine","hbs")
app.get("",(req,res)=>{
    res.render("index")

})
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.send("Hello from the server lala side");
})// 
app.get("/about",(req,res)=>{
    res.send("Hello from the about2 side")
})
app.listen(3000,()=>{
    console.log("listenig to the port")    
})