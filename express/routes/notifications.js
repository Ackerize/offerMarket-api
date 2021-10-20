var express = require('express');
var router = express.Router();
const notificationController = require('../controllers/notificationController');

router.post('/', notificationController.createNotification);
router.delete('/:uid/:seller', notificationController.deleteNotification);

module.exports = router;