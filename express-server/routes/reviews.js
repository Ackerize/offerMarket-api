var express = require('express');
var router = express.Router();
const reviewController = require('../controllers/reviewController');

/* GET users listing. */
router.get('/:sellerUid', reviewController.getBySeller);

/* POST users listing. */
router.post('/', reviewController.create);

module.exports = router;