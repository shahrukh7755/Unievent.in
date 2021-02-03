const express = require('express');
const router = express.Router();
const UserModel=require("../models/userModel");



router.post("/login",async(req,res,next)=>{
  const isUserExists= await UserModel.findOne({email:req.body.email});
  console.log(req.body)
  if(isUserExists===null){
    
    res.send({status:0,
    message:"User not found"});
  }else{

    if(isUserExists.password===req.body.password){
      res.send({
        status:1,
        user:isUserExists
  
      })
    }else{
      res.send({
        status:0,
        message:"Wrong Password"
  
      })
    }
  
  }


})

router.post("/signup",async (req,res,next)=>{

  const isUserExists= await UserModel.findOne({email:req.body.email});
  console.log(req.body)
  if(isUserExists===null){
    const user = await UserModel.create(req.body)
    
    res.send(user);
  }else{
    res.send({
      status:0,
      message:"User is Already exists"
    })
  }
  
});



module.exports = router;
