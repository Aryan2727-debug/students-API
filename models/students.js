const mongoose = require("mongoose");
const validator = require("validator");

//defining a Schema

const studentSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },
    email : {
        type : String,
        required : true,
        unique : true,
        validate(value){
            if(!(validator.isEmail(value))){
                throw new Error("Email entered is not valid");
            };
        }
    },
    phone : {
        type : Number,
        required : true,
        unique : true,
        min : 10
    },
    address : {
        type : String,
        required : true
    }
});

//creating a collection by using Models

const Student = new mongoose.model("Student" , studentSchema);

module.exports = Student; 