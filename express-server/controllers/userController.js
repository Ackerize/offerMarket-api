const User = require("../models/user");

module.exports.create = async (req, res, next) => {
  const { email, uid } = req.body;
  const isEmail = await User.findOne({ email });

  if (isEmail) {
    return res.status(400).json({
      error: true,
      message: "Usuario ya existe con ese correo electrónico",
    });
  } else {
    const user = new User({ ...req.body });
    user
      .save()
      .then(() =>
        res
          .status(201)
          .json({ error: false, message: "Usuario creado con éxito" })
      )
      .catch((err) =>
        res.status(500).json({
          error: true,
          message: "Ocurrió un error inesperado",
          errorMessage: err.message,
        })
      );
  }
};

module.exports.getByUid = async (req, res, next) => {
  const { uid } = req.params;
  const user = await User.findOne({ uid });

  if (user) {
    return res.status(200).json({
      error: false,
      message: "Usuario encontrado",
      user: {
        hasProfile: user.hasProfile,
      },
    });
  } else {
    return res.status(404).json({
      error: true,
      message: "Usuario no encontrado",
    });
  }
};