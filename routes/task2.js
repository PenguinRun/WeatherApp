var express = require('express');
var router = express.Router();
var weather = require('../controllers/Task2Contraller');
/* GET task2 page. */
var Task2 = new weather();
router.get('/', Task2.getData);
module.exports = router;
