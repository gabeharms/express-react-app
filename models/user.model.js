var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var UserSchema = new mongoose.Schema({
  username: String,
  fullname: String,
  password: {type: String, select: false}
});

module.exports = mongoose.model('User', UserSchema);
