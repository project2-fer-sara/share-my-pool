const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Pool = require('../models/Pool');
const passport = require('passport');
const ensureLogin = require('connect-ensure-login');

router.get('/',  ensureLogin.ensureLoggedIn('/login'), (req, res, next) => {
  const poolId = req.query.id;

  Pool.find({}, (err, pool) => {
    if (err) { return next(err); }
    res.render('filterPools', { pool: pool });
  });
});

module.exports = router;
