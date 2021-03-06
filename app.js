var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var task1 = require('./routes/task1');
var users = require('./routes/users');
var task2 = require('./routes/task2');
var task3 = require('./routes/task3');
var task4 = require('./routes/task4');
var task5 = require('./routes/task5');
var task6 = require('./routes/task6');

// DataBase
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "PenguinRun",
    password: "1234",
    database: "WeatherApp"
});

console.log("hihi")


con.connect(function(err) {
    if (err) {
        console.log('connecting error');
        return;
    }
    console.log('connecting success');
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    req.con = con;
    next();
});

app.use(express.static(__dirname + '/public/images'));
app.use('/Task1', task1);
app.use('/users', users);
app.use('/Task2', task2);
app.use('/Task3', task3);
app.use('/Task4', task4);
app.use('/Task5', task5);
app.use('/Task6', task6);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
