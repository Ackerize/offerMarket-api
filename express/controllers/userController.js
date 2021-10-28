const User = require("../models/user");

module.exports.create = async (req, res, next) => {
  const { uid } = req.body;
  const exist = await User.findOne({ uid });

  if (exist) {
    return res.status(200).json({
      error: false,
      message: "Usuario encontrado",
      user: exist,
    });
  } else {
    const user = new User({ ...req.body });
    user
      .save()
      .then((newUser) =>
        res
          .status(201)
          .json({
            error: false,
            message: "Usuario creado con éxito",
            user: newUser,
          })
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
