const express = require('express');
const router = express.Router();
const Pool = require('../models/Pool');
const User = require('../models/User');

router.get('/', (req, res, next) => {
  res.render('addPool');
});

router.post('/', (req, res, next) => {
  const newPool = new Pool({
    poolAdName: req.body.poolAdName,
    address: req.body.address,
    numberOfGuests: req.body.numberOfGuests,
    price: req.body.price,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    openHours: req.body.openHours,
    closeHours: req.body.closeHours,
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

router.get('/:id/edit', (req, res, next) => {
  const poolId = req.params.id;

  Pool.findById(poolId, (err, Pool) => {
    if (err) { return next(err); }
    res.render('updatePool', { Pool: Pool });
  });
});

router.post('/:id', (req, res, next) => {
  const poolId = req.params.id;

  /*
   * Create a new object with all of the information from the request body.
   * This correlates directly with the schema of Product
   */
  const updates = {
      poolAdName: req.body.poolAdName,
      numberOfGuests: req.body.numberOfGuests,
      price: req.body.price,
      address: req.body.address,
      children: req.body.children,
      petFriendly: req.body.petFriendly,
      smoke: req.body.smoke
  };

  Pool.findByIdAndUpdate(poolId, updates, (err, product) => {
    if (err){ return next(err); }
    return res.redirect(`/addPool/${req.params.id}`);
  });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;

  Pool.findByIdAndRemove(id, (err, product) => {
    if (err){ return next(err); }
    return res.redirect('/addPool');
  });

});

module.exports = router;
