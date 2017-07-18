const express = require('express');
const router = express.Router();
const Pool = require('../models/Pool');


router.get('/', (req, res, next) => {
  res.render('addPool');
});

router.post('/', (req, res, next) => {
  const newPool = new Pool({
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

  newPool.save((error, Pool) => {
    if (error) {
      next(error);
    } else {
      res.redirect(`/addPool/${newPool._id}`);
    }
  });
});

router.get('/:id', (req, res, next) => {
  Pool.findById(req.params.id, (error, Pool) => {
    if (error) {
      next(error);
    } else {
      res.render('poolDetails', {
        Pool
      });
    }
  });
});

module.exports = router;
