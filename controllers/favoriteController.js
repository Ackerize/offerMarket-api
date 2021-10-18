const Favorite = require("../models/favorite");

module.exports.create = (req, res, next) => {
  const favorite = new Favorite({ ...req.body });
  favorite
    .save()
    .then((favorite) => {
      res.status(201).json({
        message: "Producto añadido al favoritos",
        error: false,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Ocurrió un error inesperado",
        error: true,
        errorMessage: error.message,
      });
    });
};

module.exports.getByUser = (req, res, next) => {
  Favorite.find({ user: req.params.userId })
    .populate("product")
    .then((favorites) => {
      res.status(200).json({
        message: "Favoritos obtenidos",
        error: false,
        favorites,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Ocurrió un error inesperado",
        error: true,
        errorMessage: error.message,
      });
    });
};

module.exports.delete = (req, res, next) => {
  Favorite.findOneAndDelete({ product: req.params.productId })
    .then((favorite) => {
      res.status(200).json({
        message: "Producto eliminado de favoritos",
        error: false,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Ocurrió un error inesperado",
        error: true,
        errorMessage: error.message,
      });
    });
};
