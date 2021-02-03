var express = require('express');
var router = express.Router();
const Event=require("../models/eventModel");
const multer  = require('multer')
const path=require("path");
const EventRegister = require("../models/register")


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images")
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+file.originalname)
  }
})
 
var upload = multer({ storage: storage })

// Find users events

router.post("/user_event",async(req,res,next)=>{
  const events=await Event.find({organizer:req.body.organizerId})
  res.send(events)
})

// Create a Events
router.post("/createEvent",upload.single('thumnailsURL'),async (req,res,next)=>{

    const eventData={
      "title":req.body.title,
      "description":req.body.description,
      "time":req.body.time,
      "price":req.body.price,
      "date":req.body.date,
      "catagory":req.body.catagory,
      "venu":req.body.venu,
      "thumnailsURL":"http://localhost:3000/images/"+req.file.filename,
      "organizer":req.body.organizer
    }
  
 
    const event=await Event.create(eventData);
    res.send({
      status:1,
      data:event
    })
});

router.post("/getAllEvents",async(req,res,next)=>{
    const Events = await Event.find((req.body.catagory===undefined?{}:{catagory:req.body.catagory}));
    res.send(Events)
});

router.post("/deleteEvent",async(req,res,next)=>{
  const eventId=await Event.findByIdAndRemove(req.body.eventId)
  res.send(eventId._id)
})

router.post("/getRegisterInfo",async(req,res,next)=>{
  console.log(req.body)
  const eventInfo=await EventRegister.find({eventId:req.body.eventId})
  console.log(eventInfo)
  res.send(eventInfo)
})

router.post("/eventRegister",async(req,res,next)=>{


  let isExist= await EventRegister.findOne({eventId:req.body.eventId}).where("registrationNo").equals(req.body.registrationNo);
  console.log(isExist)

  if(isExist===null){
    EventRegister.create(req.body,(err,data)=>{
      if(err)throw err;
      res.send({
        status:1,
        data:data,
        message:"Thank you, We have recived your information"

      })
    })
  }else{
    res.send({
      status:0,
      message:"You have already registered"
    })
  }
 
})

// Finding the events details for events veiw page
router.post("/viewEvent",async(req,res,next)=>{
   Event.findById(req.body.eventId)
  .populate("organizer")
  .exec((err,data)=>{
    res.send(data)
    console.log(data)
  })
})


module.exports = router;
