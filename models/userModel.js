"use strict"

const mongoose =require("mongoose");
const Schema=mongoose.Schema;


const userSchema=Schema({
    email:{
        type:String,
        require:true
    },
    aboutOrganization:String,
    nameOfOrganization:String,
    firstName:String,
    lastName:String,
    password:String,
    createAt:{
        type:Date,
        default:Date.now()
    },
    modifyAt:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("Users",userSchema)