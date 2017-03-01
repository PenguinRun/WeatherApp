var express = require('express');
var router = express.Router();
var weather = require('../controllers/Task6Contraller');
/* GET task6 page. */
var Task6 = new weather();

router.get('/', Task6.getData);

module.exports = router;
