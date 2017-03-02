var express = require('express');
var router = express.Router();
var Weather = require('../controllers/Task3Contraller');
/* POST task3 page. */
var Task3 = new Weather();

router.post('/', Task3.postData);

module.exports = router;
