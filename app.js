//import module
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');


//import database configuration
const db = require('./config/mongoose');
require('./config/passport')(passport);

// Load environment variables from a .env file
const dotenv =require('dotenv').config();
const PORT = process.env.PORT



//set template engine
app.set('view engine', 'ejs');




//middleware for parsing request data
app.use(express.urlencoded({ extended: false }))
app.use(passport.initialize());
app.use(passport.session());
app.use(expressLayouts);
app.use(express.json())
app.use("/assets", express.static('./assets'));



//session Configuration 
app.use(
  session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
  })
);

//Flash messages setup
app.use(flash());
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});



//Routes
app.use('/', require('./routes/home'));
app.use('/auth', require('./routes/user'));
require('./routes/googleRoutes')
app.get('/google',passport.authenticate('google',{scope:'profile'}));
app.get('/google/callback',passport.authenticate('google',{failureRedirect:'/auth/login'}),(req,res)=>{
  res.render('googlelogSuceesful');
})


//server
app.listen(PORT, console.log(`Server running on ${PORT}`));