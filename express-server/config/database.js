const mongoose = require("mongoose");

// Connect to database

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("success connected to database");
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

module.exports = { connect };