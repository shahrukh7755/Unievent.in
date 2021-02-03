"use strict"

const mongoose =require("mongoose");
const Schema=mongoose.Schema;


const eventSchema=Schema({
    title:String,
    description:String,
    time:String,
    date:Date,
    venu:String,
    price:Number,
    thumnailsURL:String,
    catagory:String,
    organizer:{
        type:Schema.Types.ObjectId,
        ref:"Users"
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

module.exports=mongoose.model("Events",eventSchema)