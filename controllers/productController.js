const Product = require("../models/product");
const Profile = require("../models/profile");
const notificationController = require("../controllers/notificationController");

module.exports.getAll = (req, res, next) => {
  const perPage = Number(req.query.size) || 10;
  const page = req.query.page > 0 ? req.query.page : 0;

  const sortProperty = req.query.sortby || "createdAt";
  const sort = req.query.sort || "desc";

  const { category } = req.query;

  const initialState = {
    ...(req.query.category && { category }),
  };

  Product.find({ ...initialState })
    .limit(perPage)
    .skip(perPage * page)
    .sort({ [sortProperty]: sort })
    .then((products) => res.status(200).json({ error: false, products }))
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};

module.exports.getById = (req, res, next) => {
  const {
    params: { id },
  } = req;
  Product.findById(id)
    .then(async (product) => {
      if (product) {
        const profile = await Profile.findOne({ user: product.seller });
        res.status(200).json({
          error: false,
          product: {
            ...product._doc,
            seller: {
              uid: profile.user,
              name: profile.name,
              photo: profile.photo,
            },
          },
        });
      } else {
        res
          .status(404)
          .json({ error: true, message: "Producto no encontrado" });
      }
    })
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};

module.exports.getByString = (req, res, next) => {
  const {
    params: { productName },
  } = req;

  const perPage = Number(req.query.size) || 10;
  const page = req.query.page > 0 ? req.query.page : 0;

  const sortProperty = req.query.sortby || "createdAt";
  const sort = req.query.sort || "desc";

  Product.find({ name: { $regex: productName, $options: "i" } })
    .limit(perPage)
    .skip(perPage * page)
    .sort({ [sortProperty]: sort })
    .then((products) => res.status(200).json({ error: false, products }))
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};

module.exports.getByUser = (req, res, next) => {
  const {
    params: { uid },
  } = req;
  Product.find({ seller: uid })
    .then((products) => res.status(200).json({ error: false, products }))
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};

module.exports.create = async (req, res, next) => {
  const user = await Profile.findOne({ user: req.body.seller });
  const product = new Product({ ...req.body, location: { ...user.location } });
  product
    .save()
    .then((product) => {
      notificationController.sendNotification(product.seller, product._id);
      res
        .status(201)
        .json({ error: false, message: "Producto creado con éxito" });
    })
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};