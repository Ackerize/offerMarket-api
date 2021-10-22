const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://offermarket-d6c31-default-rtdb.firebaseio.com"
});

module.exports = admin // database() is a method of firebase.database()