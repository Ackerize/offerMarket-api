var express = require('express');
var router = express.Router();
const reviewController = require('../controllers/reviewController');

/* GET reviews listing. */
router.get('/:sellerUid', reviewController.getBySeller);

/* POST reviews listing. */
router.post('/', reviewController.create);

module.exports = router;