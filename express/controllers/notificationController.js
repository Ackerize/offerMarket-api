const Notification = require("../models/notification");
const Profile = require("../models/profile");
const firebase = require("../firebase/firebase-config").default;

module.exports.sendNotification = async (uidSeller, idProduct) => {
  const profile = await Profile.findOne({ user: uidSeller });
  const notifications = await Notification.find({ seller: uidSeller });
  notifications.forEach((notification) => {
    const { user } = notification;
    firebase.ref(`/notifications/${user}`).push({
      date: Date.now(),
      product: idProduct,
      seller: {
        name: profile.name,
        photo: profile.photo,
      },
      message: "Agregó un nuevo producto",
      read: false,
    });
  });
};

module.exports.deleteNotification = (req, res, next) => {
  const { uid, seller } = req.params;
  Notification.findOneAndDelete({
    user: uid,
    seller,
  })
    .then(() =>
      res
        .status(200)
        .json({ error: false, message: "Notificación eliminada con éxito" })
    )
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};

module.exports.createNotification = (req, res, next) => {
  const notification = new Notification({
    ...req.body,
  });
  notification
    .save()
    .then(() =>
      res
        .status(201)
        .json({ error: false, message: "Notificación creada con éxito" })
    )
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};
