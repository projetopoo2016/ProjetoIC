var expressHandlebars = require('express-handlebars');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var router = require('express-router');
var app = express()


//midleware path
app.use(express.static(path.join(__dirname, 'public')));


//handlebars
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.engine('hbs', expressHandlebars(
    {extname: 'hbs', 
    defaultLayout: 'main', 
    partialsDir: __dirname + '/views/partials'}
));

var index = require('./routes/index');
var users = require('./routes/users');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', index);
app.use('/users', users);


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

  app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});



