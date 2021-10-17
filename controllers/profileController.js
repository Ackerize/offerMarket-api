const Profile = require("../models/profile");
const User = require("../models/user");

module.exports.create = (req, res, next) => {
  const profile = new Profile({ ...req.body });
  profile
    .save()
    .then(() => {
      User.findOneAndUpdate({ uid: req.body.user }, { hasProfile: true }).then(
        () => {
          res.status(201).json({
            message: "Perfil creado con éxito",
            error: false,
          });
        }
      );
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      });
    });
};

module.exports.getOne = (req, res, next) => {
  const { uid } = req.params;
  Profile.findOne({ user: uid })
    .then((profile) => {
      if (profile) {
        res.status(200).json({
          error: false,
          message: "Perfil encontrado",
          data: profile,
        });
      } else {
        res.status(404).json({
          error: true,
          message: "No se encontró el perfil",
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      });
    });
};
