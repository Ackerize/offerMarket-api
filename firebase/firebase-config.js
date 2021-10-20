const firebase = require('firebase/compat/app');
const database = require("firebase/compat/database")

const firebaseConfig = {
  apiKey: "AIzaSyC44c6oM3-D_Nbuy_0-8HklT-hWesgvJzs",
  authDomain: "offermarket-d6c31.firebaseapp.com",
  projectId: "offermarket-d6c31",
  storageBucket: "offermarket-d6c31.appspot.com",
  messagingSenderId: "1082374728024",
  appId: "1:1082374728024:web:7a8f06329e50f765629d2d",
};

const app = firebase.initializeApp(firebaseConfig);

exports.default = app.database();