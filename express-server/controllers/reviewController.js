const Review = require("../models/review");

module.exports.create = (req, res, next) => {
  const { sellerUid } = req.params;
  const review = new Review({
    ...req.body,
    seller: sellerUid,
  });
  review
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Reseña guardada con éxito",
        error: false,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      });
    });
};

module.exports.getBySeller = (req, res, next) => {
  const { sellerUid } = req.params;
  Review.find({ seller: sellerUid })
    .then((reviews) => {
      res.status(200).json({
        error: false,
        message: "Reseñas obtenidas con éxito",
        reviews,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      });
    });
};
