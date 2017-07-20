const express = require('express');
const router = require(express.Router());
const User = require('../models/User');

router.get('/poolDetails', (req, res, next) => {
  const poolId = req.query.id;

  Product.findById(poolId, (err, pool) => {
    if (err) { return next(err); }
    res.render('pool/show', { pool: pool });
  });
});
