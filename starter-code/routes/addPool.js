const express = require('express');
const router = express.Router();
const Pool = require('../models/Pool');


router.get('/', (req, res, next) => {
    res.render('addPool');
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    const newPool = new Pool ( {
      poolAdName: req.body.poolAdName,
      address: req.body.address,
      numberOfGuests: req.body.numberOfGuests,
      children: req.body.children,
      petFriendly: req.body.petFriendly,
      smoke: req.body.smoke,
      location: {
        type: "Point",
        coordinates: [req.body.latitude, req.body.longitude]
      }
    });
    console.log(newPool);

    newPool.save((error, p) => {
      if (error) {
        next(error);
      } else {
        res.render('/poolDetails');
      }
    });
  });

  module.exports = router;
