const jwt=require("jsonwebtoken")
const Register=require("../models/register")

const auth=async(req,res,next)=>{
    try{
        const token=req.cookies.jwt;
        const verifyuser=jwt.verify(token,process.env.SECRET);
        console.log(verifyuser)
        // req.token=token
        // req.user=user
    }catch(error){
           res.status(401).send(error);
    }
    next()
}
module.exports=auth