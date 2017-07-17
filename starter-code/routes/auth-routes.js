const express = require('express');
const router = express.Router();

const User = require('../models/User.js');
const bcrypt =require('bcrypt');
const bcryptSalt = 10;

router.get('/signup', (req, res, next) => {
  res.render('/auth/signup');
});

router.post('/signup', (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  if(username === '' || email === '' || password === ''){
    res.render('auth/signup', {message:"Tell us your username, email and/or password"});
    return;
  }
  User.findOne({username}, "username", (err, user) => {
    if(user !== null){
      res.render('auth/signup', {message:"The user has been taken"});
      return;
    }

  User.findOne({email}, "email", (err, email) => {
    res.render('auth/signup', {message: "The email is already in used"});
    return;
  });
    //encrypt password
    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = User({
      username: username,
      email: email,
      password: password
    });

    newUser.save((err) => {
      if(err){
        res.render('auth/signup', {message:'Ups, something went wrong. Please try again'});
      }else{
        res.redirect('/');
      }
    });
  });
});
module.exports = router;
