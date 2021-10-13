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
      required: true,
      default: 0,
    },
    location: {
      latitude: {
        type: Number,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      required: true,
    },
  },
  {
    timestamp: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
