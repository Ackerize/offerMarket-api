const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const favoriteSchema = Schema(
  {
    user: {
      type: String,
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Favorite", favoriteSchema);
