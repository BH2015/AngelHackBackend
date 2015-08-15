var mongoose = require('mongoose');

var TextSchema = new mongoose.Schema({
  textlink: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Text', TextSchema);


