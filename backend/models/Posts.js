const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  year: {
    type: Number,
    required: false
  },
  url: {
    type: String,
    required: false
  },
  fileName: {
    type: String,
    required: false
  },
  status: {
    type: Boolean,
    required: false,
    default: true
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
