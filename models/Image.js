var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  imagelink: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);


