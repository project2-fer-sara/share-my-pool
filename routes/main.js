const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Pool = require('../models/Pool');

/* GET home page. */
router.route('/').get((req, res, next) => {
    res.render('main', {User});
  });

module.exports = router;
