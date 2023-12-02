var express = require("express");
const { findByIdAndDelete } = require("./models/studento");
require("./db/conn");
const Student = require("./models/studento");
var app = express();
app.use(express.json())
const port = process.env.PORT || 4000;
app.post("/student", (req, res) => {       // these 4 lines are not understandable
    console.log(req.body)                // start from 47.00 min
    const user = new Student(req.body);
    user.save().then(() => {
        res.send(user);
    }).catch((e) => {
        res.send(e);
    })

})

// app.post("/student", async(req, res) => {
//     try {
//         const user = new Student(req.body);      // this code is not working showing some error
//         const createUser = await user.save();
//         res.status(201).send(createUser);
//     }catch (e) { res.status(400).send(e); }
// }

app.get("/student",async(req,res)=>{
try{
    const studentData=await Student.find();  /// why isnt this working
    res.send(studentData);
}catch(e){
    res.send(e);
} 
})

// app.get("/student/:id",async(req,res)=>{
//     try{
//         const _id=req.params.id;
//         const studentData= await Student.findById(_id);
//         console.log(studentData);
//         if(!studentData){
//             res.status(404).send();
//         }
//         else{
//             res.send(studentData);
//         }
//     }catch(e){
//         res.send(e);
//     }
// })


/// for deleting
app.delete("/student/:id", async (req, res) => {
    try {
        // const _id = req.params.id;
        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
        if (!req.params.id){
            return res.status(404).send();}
        res.send(deleteStudent);
    } catch (e) {
        res.status(500).send(e)
    }
})

/// update  is similar to it first try to run this


app.listen(port, () => {
    console.log(`connection is set up at port ${port}`);
})