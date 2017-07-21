const express = require('express');
const router = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

require('../config/passport.js')();

const User = require('../models/User.js');
const Picture = require('../models/Picture.js');
//User id

const bcrypt = require('bcrypt');
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res, next) => {
  const name = req.body.name;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;

  if (username === '' || email === '' || password === '') {
    res.render('auth/signup', {
      message: "Tell us your username, email and/or password"
    });
    return;
  }
  User.findOne({
    username
  }, "username", (err, user) => {
    if (user !== null) {
      res.render('auth/signup', {
        message: "The user has been taken"
      });
      return;
    }

    if (password !== confirmPassword) {
      res.render('auth/signup', {
        message: "password do not match"
      });
      return;
    }
    User.findOne({
      email
    }, "email", (err, email) => {
      if (email !== null) {
        res.render('auth/signup', {
          message: "The email is already in use"
        });
        return;
      }
    });
    //encrypt password
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      name: name,
      lastName: lastName,
      username: username,
      email: email,
      password: hashPass,
      confirmPassword: confirmPassword,
    });

    var upload = multer({ dest: '../public/uploads/' });
    router.post('/upload', upload.single('photo'), function(req, res){

      pic = new Picture({
        name: req.body.name,
        pic_path: `/uploads/${req.file.filename}`,
        pic_name: req.file.originalname
      });

      pic.save((err) => {
          res.render('auth/signup', {
            message: 'upload correctly'
          });
      });
    });

    newUser.save((err) => {
      if (err) {
        res.render('auth/signup', {
          message: 'Ups, something went wrong. Please try again'
        });
      } else {
        res.redirect('/users');
      }
    });
  });
});

router.get('/login',(req, res, next) => {
  res.render('auth/login', {
    "message": req.flash("error")
  });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect: "/users",
  failureRedirect: "auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/logout", ensureLogin.ensureLoggedIn('/login'), (req, res) => {
  req.logout();
  res.redirect("/");
});

router.get('/userProfile/:id', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  const userId = req.params.id;
  console.log(userId);
  User.findById(userId, (error, User) => {
    if (error){
      return next(error);
    }else{
      res.render('auth/userProfile', {
        User:User,
      });
    }
  });
});

router.get('/userProfile/:id/edit', ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  const userId = req.params.id;
  User.findById(userId, (err, User) => {
    if(err) {
      return next(error);
    }else {
      res.render('auth/userProfile', {User: User});
    }
  });
});

router.post('userProfile/:id', ensureLogin.ensureLoggedIn('/login'), (req,res,next) => {

});

module.exports = router;
