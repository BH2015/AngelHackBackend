var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Profile', ProfileSchema);


