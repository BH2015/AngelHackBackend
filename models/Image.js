var mongoose = require('mongoose');

var ImageSchema = new mongoose.Schema({
  reference: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Image', ImageSchema);


