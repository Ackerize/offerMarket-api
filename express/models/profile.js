const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const profileSchema = Schema(
  {
    user: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    totalReviews: {
      type: Number,
      default: 0,
    },
    location: {
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      name: {
        type: String,
      },
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
