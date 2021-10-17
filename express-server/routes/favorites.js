var express = require('express');
var router = express.Router();
const favoriteController = require('../controllers/favoriteController');

/* GET favorites listing. */
router.get('/:userId', favoriteController.getByUser);

/* POST favorites listing. */
router.post('/', favoriteController.create);

/* DELETE favorites listing */
router.delete('/:productId', favoriteController.delete);

module.exports = router;