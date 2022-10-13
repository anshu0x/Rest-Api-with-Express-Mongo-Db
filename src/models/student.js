const mongoose = require("mongoose");
const validator  = require("validator")

const studentSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    email:{
        type:String,
        unique:[true,"Email id already present"],
        required:true,
        validate(value){
            if (!validator.isEmail(value)) {
               throw new Error("Invalid Email") 
            }
        }
    },
    phone:{
        type:Number,
        minlength:10,
        maxlength:10,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    }

})

//  now we have to define a Module ... that mean we have to create a new Collection 

//  shoulbe be capital 
const Student = new mongoose.model('Student',studentSchema)

module.exports = Student