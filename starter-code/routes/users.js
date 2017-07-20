const express = require('express');
const router = express.Router();
const mongoose     = require('mongoose');
const ensureLogin = require("connect-ensure-login");

/* GET users listing. */
router.get('/', ensureLogin.ensureLoggedIn(), function(req, res, next) {
  res.render('userSite');
});

module.exports = router;
