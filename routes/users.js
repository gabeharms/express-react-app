var express = require('express');
var router = express.Router();
var config = require('../config/environment');
var jwt = require('jwt-simple');
var bcrypt = require('bcrypt');
var User = require('../models/user.model');
var auth = require('../middleware/auth');

/* GET users listing. */
router.get('/:id', auth.isAuthenticated, function(req, res, next) {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(404);
  }
});

/* POST users */
router.post('/', function(req, res, next) {
  if (req.body.username.length <= 0 || req.body.password.length <= 0) {
    res.status(422).json({error: "Invalid username or password"})
  } else {
    User.findOne({username: req.body.username})
      .exec(function(err, user) {
        if (user) {
          res.status(422).json({error: "Username already exists"})
        } else {
          var user = new User({username: req.body.username});
          bcrypt.hash(req.body.password, 10, function(err, hash) {
            user.password = hash;
            user.save(function(err) {
              if (err) { throw res.send(500); }
              res.send(201);
            });
          });
        }
      });
  }
});

module.exports = router;
