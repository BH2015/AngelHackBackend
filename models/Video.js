var mongoose = require('mongoose');

var VideoSchema = new mongoose.Schema({
  videolink: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Video', VideoSchema);


