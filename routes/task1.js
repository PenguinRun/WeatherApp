var express = require('express');
var router = express.Router();
var Weather = require('../controllers/Task1Contraller');
/* GET task1 page. */
var Task1 = new Weather();
router.get('/', Task1.getData);
module.exports = router;
