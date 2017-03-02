var express = require('express');
var router = express.Router();
var Weather = require('../controllers/Task6Contraller');
/* GET task6 page. */
var Task6 = new Weather();

router.get('/', Task6.getData);

module.exports = router;
