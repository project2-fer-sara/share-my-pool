const express = require('express');
const router = express.Router();
const rental = require('../models/Rental');

router.get('/', (req, res, next) => {
    res.render('addRental');
});

router.post('/', (req, res, next) => {
  const newRental = new Rental({
    startDate: req.body.startDate,
  });

  newRental.save((error, Rental) => {
    if (error) {
      next(error);
    } else {
      res.redirect(`/addRental/${newRental._id}`);
    }
  });
});

module.exports = router;
