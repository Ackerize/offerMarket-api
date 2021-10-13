var express = require('express');
var router = express.Router();
var usersRouter = require('./users');

router.use('/api/v1/users', usersRouter);

module.exports = router;
