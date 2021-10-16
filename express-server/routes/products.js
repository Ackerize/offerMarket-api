var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET users listing. */
router.get('/', productController.getAll);
router.get('/:id', productController.getById);
router.get('/search/:productName', productController.getByString);

/* POST users listing. */
router.post('/', productController.create);

module.exports = router;