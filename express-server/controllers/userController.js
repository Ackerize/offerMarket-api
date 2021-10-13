const User = require("../models/user");

module.exports.create = async (req, res, next) => {
  const { email, uid } = req.body;
  const isEmail = await User.findOne({ email });

  if (isEmail) {
    return res.status(400).json({
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