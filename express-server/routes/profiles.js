var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

/* GET profiles listing. */
router.get('/:uid', profileController.getOne);

/* POST profiles listing. */
router.post('/', profileController.create);

module.exports = router;