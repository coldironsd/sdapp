var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sdapp');

var Schema = new mongoose.Schema({
  email: String,
  username: String,
  provider: String,
  name: String,
  password: String,
  admin: Boolean,
  google_id: String,
  facebook_id: String,
  userid:String,
  token:String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', Schema);