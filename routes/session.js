var express = require('express');
var router = express.Router();
var config = require('../config/environment');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var User = require('../models/user.model');

var secretKey = config.secrets.session;

/* GET users listing. */
router.post('/', function(req, res, next) {
  User.findOne({username: req.body.username})
    .select('password')
    .exec(function(err, user) {
      if (err) { return res.sendStatus(500); }
      if (!user) {
        return res.sendStatus(401);
      }
      bcrypt.compare(req.body.password, user.password, function(err, valid) {
        if (err) { return res.sendStatus(500); }
        if (!valid) { return res.sendStatus(401); }
        var token = jwt.encode({username: req.body.username}, secretKey);
        res.json(token);
      });
  });
});

module.exports = router;
