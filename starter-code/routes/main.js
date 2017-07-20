const express = require('express');
const router = express.Router();
const Pool = require('../models/Pool');

/* GET home page. */
router.route('/').get((req, res, next) => {
    res.render('main');
  });

module.exports = router;
