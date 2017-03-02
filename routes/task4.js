var express = require('express');
var router = express.Router();
var Weather = require('../controllers/Task4Contraller');
/* POST task4 page. */
var Task4 = new Weather();

router.post('/', Task4.postData);

module.exports = router;
