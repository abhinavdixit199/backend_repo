const mongoose = require("mongoose")
const bcrypt=require("bcrypt")
const employeeSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        // required:true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    confirmpassword: {
        type: String,
        required: true,
    }
})

employeeSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        console.log(`the current password is ${this.password}`);
        this.password = await bcrypt.hash(this.password, 10);
        console.log(`the current password is ${this.password}`);
        this.confirmpassword = undefined;
    }
    next()
})


    module.exports = mongoose.model('Register', employeeSchema)