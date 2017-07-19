const express = require('express');
const router = express.Router();
const passport = require("passport");
const ensureLogin = require("connect-ensure-login");

const User = require('../models/User.js');

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

  if (password !== confirmPassword){
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
      name:name,
      lastName:lastName,
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });

    newUser.save((err) => {
      if (err) {
        res.render('auth/signup', {
          message: 'Ups, something went wrong. Please try again'
        });
      } else {
        res.redirect('/');
      }
    });
  });
});

router.get('/login', (req,res,next) => {
  res.render('auth/login', {"message": req.flash("error")});
});

router.post('/login', passport.authenticate('local', {
  successRedirect: "/main",
  failureRedirect: "/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/login");
});

module.exports = router;
