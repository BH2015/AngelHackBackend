var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  emailaddress: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Profile', ProfileSchema);


