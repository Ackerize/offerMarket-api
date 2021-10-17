var express = require('express');
var router = express.Router();
var usersRouter = require('./users');
const productsRouter = require('./products');
const reviewsRouter = require('./reviews');
const profilesRouter = require('./profiles');

router.use('/api/v1/users', usersRouter);
router.use('/api/v1/products', productsRouter);
router.use('/api/v1/reviews', reviewsRouter);
router.use('/api/v1/profiles', profilesRouter);

module.exports = router;
