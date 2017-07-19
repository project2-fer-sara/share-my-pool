const express = require('express');
const router = express.Router();
const mongoose     = require('mongoose');

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render('userSite');
});

module.exports = router;
