"use strict"

const mongoose =require("mongoose");
const Schema=mongoose.Schema;


const userSchema=Schema({
    studentName:String,
    registrationNo:String,
    mobile:String,
    schoolName:String,
    email:String,
    eventId:{
        type:Schema.Types.ObjectId,
        ref:"Events"
    },
    createAt:{
        type:Date,
        default:Date.now()
    },
    modifyAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("Register",userSchema)