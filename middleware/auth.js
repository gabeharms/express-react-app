var config = require('../config/environment');
var jwt = require('jwt-simple');
var User = require('../models/user.model');
var secretKey = config.secrets.session;

module.exports = {
  isAuthenticated: function(req,res,next) {
    try {
      var token = req.headers['x-auth'];
      var auth = jwt.decode(token, secretKey);
      User.findOneAsync({username: auth.username})
        .then(function(user) {
          req.user = user;
          next();
        });
    } catch(err) {
      return res.sendStatus(401);
    }
  },
  isTokenValid: function(token) {
    return new Promise(function(resolve, reject) {
      try {
        var auth = jwt.decode(token, secretKey);
        return User.findOneAsync({username: auth.username})
          .then(function(user) {
            if (user) { 
              return resolve(user)
            }
            else {
              return reject('Not Authenticated');
            }
          });
      } catch(err) {
        return reject('Not Authenticated');
      }
    });
  }
}
