var express = require("express");
var path = require("path")
var hbs = require("hbs")
// const mongoose=require("mongoose")
const Register = require("./models/register")
require("./db/conn");// how can it happen without export
var app = express();
const port = process.env.PORT || 7000;
const staticPath = path.join(__dirname, "../templates/views");
const templatePath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set("view engine", "hbs")
app.set("views", templatePath);
app.use(express.static(staticPath));
app.get("/", (req, res) => {

    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("register")
})
app.post("/register", async (req, res) => {
    try {
        // res.send(req.body.firstname)
        const password = req.body.psw;
        const cpassword = req.body.pswr;
        if (password === cpassword) {
            const registerEmployee = new Register({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                gender: req.body.gender,
                // password: password,
                // confirmpassword: cpassword
            })
            const registered = await registerEmployee.save();
            console.log(registered)
            res.status(201).send(registered);//*
        }
        else {
            res.send("password not matching")
        }
    }
    catch (e) {
        res.status(400).send(e);
    }
       
})



hbs.registerPartials(partialPath);

app.listen(port, () => {
    console.log("server is runnig")
})

//8888888888888888888888888888888888888888888888888888888888888888888888888888888
//this is working just need to check for password and other fields

// var express = require("express");
// var path = require("path")
// var hbs = require("hbs")
// // const mongoose=require("mongoose")
// const Register=require("./models/register")
// require("./db/conn");// how can it happen without export
// var app = express();
// const port = process.env.PORT || 7000;
// const staticPath = path.join(__dirname, "../templates/views");
// const templatePath = path.join(__dirname, "../templates/views")
// const partialPath = path.join(__dirname, "../templates/partials")
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.set("view engine", "hbs")
// app.set("views", templatePath);
// app.use(express.static(staticPath));
// app.get("/", (req, res) => {

//     res.render("index")
// })
// app.get("/register", (req, res) => {
//     res.render("register")
// })
// app.post("/register", async (req, res) => {
//     try {
//         // res.send(req.body.firstname)
//         // const password = req.body.psw;
//         // const cpassword = req.body.psw-retype;
//         // if (password === cpassword) {
//             const registerEmployee = new Register({
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 gender: req.body.gender,
//                 // password: password,
//                 // confirmpassword: cpassword
//             })
//             const registered = await registerEmployee.save();
//             console.log(registered)
//             res.status(201).render(registered);//*
//         }catch (e) {
//             res.status(400).send(e);
//         }
//         // else {
//         //     res.send("password not matching")
//         // }
//     // }
// })



// hbs.registerPartials(partialPath);

// app.listen(port, () => {
//     console.log("server is runnig")
// })

//8888888888888888888888888888888888888888888888888888888888888888888888888




// var express = require("express");
// var path = require("path")
// var hbs = require("hbs")
// // const mongoose=require("mongoose")
// const Register=require("./models/register")
// require("./db/conn");// how can it happen without export
// var app = express();
// const port = process.env.PORT || 7000;
// const staticPath = path.join(__dirname, "../templates/views");
// const templatePath = path.join(__dirname, "../templates/views")
// const partialPath = path.join(__dirname, "../templates/partials")
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.set("view engine", "hbs")
// app.set("views", templatePath);
// app.use(express.static(staticPath));
// app.get("/", (req, res) => {

//     res.render("index")
// })
// app.get("/register", (req, res) => {
//     res.render("register")
// })
// app.post("/register", async (req, res) => {
//     try {
//         // res.send(req.body.firstname)
//         // const password = req.body.psw;
//         // const cpassword = req.body.psw-retype;
//         // if (password === cpassword) {
//             const registerEmployee = new Register({
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//             //     gender: req.body.gender,
//             //     password: password,
//             //     confirmpassword: cpassword
//             })
//             const registered = await registerEmployee.save();
//             console.log(registered)
//             res.status(201).render(index);//*
//         }
//         // else {
//         //     res.send("password not matching")
//         // }
//     catch (e) {
//         res.status(400).send(e);
//     }
// })



// hbs.registerPartials(partialPath);

// app.listen(port, () => {
//     console.log("server is runnig")
// })