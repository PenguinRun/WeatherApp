var express = require('express');
var router = express.Router();
var Weather = require('../controllers/Task2Contraller');
/* GET task2 page. */
var Task2 = new Weather();
router.get('/', Task2.getData);
module.exports = router;
