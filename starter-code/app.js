require('dotenv').load();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const passport = require('passport');
const layouts = require('express-ejs-layouts');
const session = require("express-session");
const flash = require("connect-flash");
const multer = require('multer');

const User = require('./models/User');
const Pool = require('./models/Pool');
const Rental = require('./models/Rental');
const Review = require('./models/Review');
const Picture = require('./models/Picture');

const router = express.Router();
const main = require('./routes/main');
const users = require('./routes/users');
const auth = require('./routes/auth-routes');
const addPool = require('./routes/addPool');
const addRental = require('./routes/addRent');
const filterPools = require('./routes/filterPools');

const app = express();
mongoose.connect('mongodb://localhost/sharepool');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/images', 'icon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);

app.use(session({
  secret: "pool-secret",
  resave: true,
  saveUninitialized: true
}));

require("./config/passport")();

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use( (req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use('/', auth);
app.use('/', main);
app.use('/addPool', addPool);
app.use('/filterPools', filterPools);
app.use('/users', users);
app.use('/addRental', addRental);

// catch 404 and forward to error handler



app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
