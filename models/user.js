var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
Schema = mongoose.Schema;

var User = mongoose.Schema({
  local : {
    email        : String,
    password     : String,
  }
});

var jokesSchema = new Schema({
    joke: String,
});

var jokes = mongoose.model('jokes', jokesSchema);


User.methods.hash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', User);