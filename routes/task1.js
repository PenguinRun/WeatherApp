var express = require('express');
var router = express.Router();

https://heroku="RAY"/TASK1

/* GET home page. */
router.get('/', function(req, res, next) {
      var id = req.query.id;
      if( id === "1"){
      res.json({
        place: {
          areaName: "台南",
          placeName: "永康"
        },
        weatherName: "陰天",
        dateTime:{
          date: "2017-2-7",
          time: "19:00",
        },
        temperature: 18,
        rainfall: 20.50,
        err: ""
      })
    }else{
      res.json({
        err: "sorry, your query id is not equal 1, please change the query id"
      })
    }
});

module.exports = router;
