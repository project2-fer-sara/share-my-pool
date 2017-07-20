const express = require('express');
const router = express.Router();
const rental = require('../models/Rental');
const User = require('../models/User');

router.get('/', (req, res, next) => {
    res.render('addRental');
});

router.post('/', (req, res, next) => {
    const startDate = req.body.name;
    const numberOfGuests = req.body.numberOfGuests;
    let
if (numberOfGuests > )
});

router.post('/', (req, res, next) => {
  console.log(newUser._id);
  const newRental = new Rental({
    guest: newUser._id,
    startDate: req.body.startDate,
  });


  newRental.save((error, Rental) => {
    if (error) {
      next(error);
    } else {
      res.redirect(`/addRental/confirmed`);
    }
  });
});

module.exports = router;
