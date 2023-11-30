var express = require("express")
var app= express();
app.get("/",(req,res)=>{
    res.send({
        index:1,
        namel:"RAHul",
    });
})// we can also use square brackets for using the above json file as array of object  for that square bracket just need to be put before and after curly brackets
// in the above case we could have also used res.json instead of res.send 
// using res.json has an added advantage that it converts even non objects file like null into json whereas res.send 
// is only used when file is object or array

app.get("/about",(req,res)=>{
    res.send("<h1>Hello from the about2 side</h1>")// this is a example of sending a html file it is used where html lines are less 
    // and can be directly used there are other ways when you have to show a full file 
})
app.listen(3000,()=>{
    console.log("listenig to the port")    
})