const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const reviewSchema = new Schema({
  author: {
    type: String,
    required: true
  },
  seller: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);