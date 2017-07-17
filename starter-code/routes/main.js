const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('main', {
    title: 'PoolSharing'
  });
});

module.exports = router;
