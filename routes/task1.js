var express = require('express');
var router = express.Router();
var weather = require('../controllers/Task1Contraller');
/* GET task1 page. */
var Task1 = new weather();
router.get('/', Task1.getData);
module.exports = router;
