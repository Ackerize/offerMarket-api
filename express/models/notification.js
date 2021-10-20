const mongooose = require("mongoose"),
  Schema = mongooose.Schema;

const notificationSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    seller: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongooose.model("Notification", notificationSchema);