var express = require('express');
var router = express.Router();
var weather = require('../controllers/Task5Contraller');
/* POST task5 page. */
var Task5 = new weather();

router.post('/', Task5.postData);

module.exports = router;
