var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var eventRouter = require("./routes/event")
var app = express();
require("dotenv").config()

const mongoose=require("mongoose")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, './client/build')));

app.use('/', indexRouter);
app.use('/v1/users', usersRouter);
app.use("/v1/event",eventRouter)





mongoose.connect("mongodb+srv://razu:munna707@cluster0-4yrtn.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true,})
.then(()=>{
  console.log("Database Connected")
})
.catch(err=>{
  throw err;
})

app.get("/*",(req,res,next)=>{
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
})


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
