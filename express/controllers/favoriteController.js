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
    .sort({ "createdAt": "desc" })
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
  Favorite.findOneAndDelete({
    product: req.params.productId,
    user: req.params.userId,
  })
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

module.exports.isFavorite = (req, res, next) => {
  Favorite.findOne({ product: req.params.productId, user: req.params.userId })
    .then((favorite) => {
      if (!favorite) {
        res.status(200).json({
          message: "El producto no está en favoritos",
          error: false,
          isFavorite: false,
        });
      } else {
        res.status(200).json({
          message: "El producto está en favoritos",
          error: false,
          isFavorite: true,
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Ocurrió un error inesperado",
        error: true,
        errorMessage: error.message,
      });
    });
};
