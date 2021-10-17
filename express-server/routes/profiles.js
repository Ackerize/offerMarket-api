var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

/* GET users listing. */
router.get('/:uid', profileController.getOne);

/* POST users listing. */
router.post('/', profileController.create);

module.exports = router;