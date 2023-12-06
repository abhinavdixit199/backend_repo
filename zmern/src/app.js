var dotenv = require("dotenv").config()
var express = require("express");
var path = require("path")
var hbs = require("hbs")
var bcrypt = require("bcrypt")
const cookieparser = require("cookie-parser")
const auth = require("../src/middleware/auth")
// const mongoose=require("mongoose")

const Register = require("./models/register");
const { findById } = require("./models/register");
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
app.use(cookieparser())

app.get("/", (req, res) => {

    res.render("index")
})
app.get("/register", (req, res) => {
    res.render("register")
})
// app.get("/registe", async (req, res) => {
//     try {
//         const lala = await Register.find();  /// for getting the full data in database
//         res.send(lala);
//     } catch (e) {
//         res.send(e);
//     }
// })
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
                phone: req.body.phone,
                email: req.body.email,
                password: password,
                confirmpassword: cpassword
            })
            console.log("the success part" + registerEmployee);
            const token = await registerEmployee.generateAuthToken();
            console.log("The token part" + token);

            res.cookie("jwt", token, {
                expires: new Date(Date.now() + 10000),
                httpOnly: true
            })
            const registered = await registerEmployee.save();
            console.log("the page part" + registered);
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
app.get("/secret", auth, (req, res) => {
    // console.log(req.cookies.jwt)
    res.render("secret")
})
app.get("/login", (req, res) => {
    res.render("login")
})
// app.get("/logout",async (req, res) => {
//     try {
//         console.log(req.user);
//         req.user.tokens = req.user.tokens.filter((currElement) => {
//             return currElement.token !== req.token;
//         })
//         res.clearCookie("jwt")
//         console.log("logout successfully")
//         await req.user.save();
//         res.render("login")
//     }catch(error){
//         console.log(error)
//     }
// })
app.post("/login", async (req, res) => {
    try {
        const email = req.body.lemail;
        const password = req.body.lpsw;
        const useremail = await Register.findOne({ email: email });
        const isMatch = await bcrypt.compare(password, useremail.password);
        const token = await useremail.generateAuthToken();

        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 60000),
            httpOnly: true
        })
        console.log("The token part" + token);
        if (isMatch) {
            res.status(201).render("index");
        } else {
            res.send("invalid password Details");
        }
    } catch (error) {
        res.status(400).send("invalid login Details")
    }
})



hbs.registerPartials(partialPath);

app.listen(port, () => {
    console.log("server is runnig")

})




// var express = require("express");
// var path = require("path")
// var hbs = require("hbs")
// var bcrypt=require("bcrypt")
// // const mongoose=require("mongoose")
// const Register = require("./models/register");
// const { findById } = require("./models/register");
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
// app.get("/registe",async(req,res)=>{
//     try{
//         const lala=await Register.find();  /// for getting the full data in database
//         res.send(lala);
//     }catch(e){
//         res.send(e);
//     }
//     })
// app.post("/register", async (req, res) => {
//     try {
//         // res.send(req.body.firstname)
//         const password = req.body.psw;
//         const cpassword = req.body.pswr;
//         if (password === cpassword) {
//             const registerEmployee = new Register({
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 gender: req.body.gender,
//                 phone: req.body.phone,
//                 email: req.body.email,
//                 password: password,
//                 confirmpassword: cpassword
//             })
//             const registered = await registerEmployee.save();
//             console.log(registered)
//             res.status(201).send(registered);//*
//         }
//         else {
//             res.send("password not matching")
//         }
//     }
//     catch (e) {
//         res.status(400).send(e);
//     }

// })
// app.get("/login", (req, res) => {
//     res.render("login")
// })
// app.post("/login", async (req, res)=> {
//     try {
//         const email = req.body.lemail;
//         const password = req.body.lpsw;
//         const useremail = await Register.findOne({ email: email });
//         const isMatch =await bcrypt.compare(password,useremail.password)
//         if (isMatch) {
//             res.status(201).render("index");
//         } else {
//             res.send("invalid password Details");
//         }
//     } catch (error) {
//         res.status(400).send("invalid login Details")
//     }
// })



// hbs.registerPartials(partialPath);

// app.listen(port, () => {
//     console.log("server is runnig")
// })