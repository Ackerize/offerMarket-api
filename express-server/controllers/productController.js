const Product = require("../models/product");

module.exports.getAll = (req, res, next) => {
  const perPage = Number(req.query.size) || 10;
  const page = req.query.page > 0 ? req.query.page : 0;

  const sortProperty = req.query.sortby || "createdAt";
  const sort = req.query.sort || "desc";

  Product.find({})
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
    .then((product) => {
      if (product) res.status(200).json({ error: false, product });
      res.status(404).json({ error: true, message: "Producto no encontrado" });
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
  Product.find({ name: { $regex: productName, $options: "i" } })
    .then((products) => res.status(200).json({ error: false, products }))
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};

module.exports.create = (req, res, next) => {
  const product = new Product({ ...req.body });
  product
    .save()
    .then((product) =>
      res
        .status(201)
        .json({ error: false, message: "Producto creado con éxito", product })
    )
    .catch((err) =>
      res.status(500).json({
        error: true,
        message: "Ocurrió un error inesperado",
        errorMessage: err.message,
      })
    );
};
