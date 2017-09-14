var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
Schema = mongoose.Schema;

Joke = require('./joke');

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  },
  favorites : [String]
});


User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);

