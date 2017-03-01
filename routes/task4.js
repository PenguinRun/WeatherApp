var express = require('express');
var router = express.Router();
var weather = require('../controllers/Task4Contraller');
/* POST task4 page. */
var Task4 = new weather();

router.post('/', Task4.postData);

module.exports = router;
