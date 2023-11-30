const mongoose=require("mongoose")
const validator=require("validator")

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        required:true,
        unique:[true,"email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})
// const Student= new mongoose.model('Student', studentSchema);// what is this for  check in conn.js 2nd line
// module.export= {Student};
module.exports = mongoose.model('Student', studentSchema);