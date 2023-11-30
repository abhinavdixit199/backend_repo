const path= require("path")
const express=require("express")
const hbs=require ("hbs")
const app=express();

// const staticPath = path.join(__dirname,"../src/templates/views");// why should we write only public
const templatePath=path.join(__dirname,"../src/templates/views")
// const partialPath=path.join(__dirname,"../src/templates/partials")
app.set("view engine","hbs")
app.set("views",templatePath );
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    res.render("index")
})
// hbs.registerPartials(partialPath);

app.get("/about",(req,res)=>{
    res.send("Hello from the server lala side");
}) 
app.listen(3000,()=>{
    console.log("listenig tthe port")    
})


// remember one thing in line no 8 it is only to show that folder named views is saved on given path and so we have made the template path
// according to it. whereas staticPath is used that what is to be rendered in webpage. HOwever it is necessary that either their is file named 
// views or there may be a path like in line no 8 that shows path of given template