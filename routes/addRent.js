const express = require('express');
const router = express.Router();
const Rental = require('../models/Rental');
const User = require('../models/User');
const Pool = require('../models/Pool');


router.get('/', (req, res, next) => {
    res.render('addRental');
});

router.post('/', (req, res, next) => {
    const startDate = req.body.name;
    const numberInvited = req.body.numberInvited;

if (numberInvited > Pool.numberOfGuests || startDate < Pool.startDate || startDate > Pool.endDate ){
  res.render('addRental', {
    message: "You can't go with that many persons :("
  });
  return;
}
  const newRental = new Rental({
    guest: newUser._id,
    startDate: req.body.startDate,
  });
  newRental.save((error, Rental) => {
    if (error) {
      next(error);
    } else {
      res.redirect(`/addRental/`);
    }
  });
});


module.exports = router;
