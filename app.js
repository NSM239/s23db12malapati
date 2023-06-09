var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config(); 
const connectionString = process.env.MONGO_CON 
mongoose = require('mongoose'); 
mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var BoatsRouter = require('./routes/Boats');
var BoardRouter = require('./routes/Board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();
var Boats = require("./models/boats");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Boats', BoatsRouter);
app.use('/Board', BoardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

async function recreateDB(){ 
  // Delete everything 
  await Boats.deleteMany(); 
 
  let instance1 = new 
Boats({BoatType:"Sail powered boats",  BoatsCost:'5000', Capacity:420, Hull:'V-Shaped Hulls'}); 
instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)})


    let instance2 = new 
    Boats({BoatType:"powered boats",  BoatsCost:'4000', Capacity:380, Hull:'Round-bottomed hulls'}); 
    instance2.save().then(doc=>{
      console.log("First object saved")}
      ).catch(err=>{
      console.error(err)})


      let instance3 = new 
  Boats({BoatType:"Motorboats",  BoatsCost:'3600', Capacity:3500, Hull:'Pontoon hulls'}); 
  instance3.save().then(doc=>{
    console.log("First object saved")}
    ).catch(err=>{
    console.error(err)})

} 
 
let reseed = false; 
if (reseed) { recreateDB();}
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Get the default connection 
var db = mongoose.connection; 
 
//Bind connection to error event  
db.on('error', console.error.bind(console, 'MongoDB connection error:')); 
db.once("open", function(){ 
  console.log("Connection to DB succeeded")}); 

module.exports = app;
