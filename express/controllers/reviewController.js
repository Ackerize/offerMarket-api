const Review = require("../models/review");
const Profile = require("../models/profile");

module.exports.create = (req, res, next) => {
  const review = new Review({
    ...req.body,
  });
  review
    .save()
    .then(async (result) => {
      const profile = await Profile.findOne({ user: result.seller });
      await Profile.updateOne(
        { user: result.seller },
        {
          rating: (profile.rating + result.rating) / (profile.totalReviews + 1),
          totalReviews: profile.totalReviews + 1,
        }
      );
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
    .then(async (reviews) => {
      const reviewsWithProfile = await Promise.all(
        reviews.map(async (review) => {
          const { name: author, photo } = await Profile.findOne({
            user: review.author,
          });
          const { name: seller } = await Profile.findOne({
            user: review.seller,
          });
          return { ...review._doc, author, seller, photo };
        })
      );

      res.status(200).json({
        error: false,
        message: "Reseñas obtenidas con éxito",
        reviews: reviewsWithProfile,
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
