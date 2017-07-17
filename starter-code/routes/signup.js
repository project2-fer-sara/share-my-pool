const express = require('express');
const router = express.Router();

/* GET home page. */
router.route('/signup')
  .get((req, res, next) => {
    res.render('auth/signup');
  });

module.exports = router;
