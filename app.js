var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var cadastroRouter = require('./routes/cadastroRoutes');


var app = express();

//Utilização das rotas criadas
const rotasProdutos =  require("./routes/productsRoutes");
const rotasOrders = require('./routes/ordersRoutes');
const rotasLogin = require('./routes/userRoutes')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Renderização da home
app.use('/', indexRouter);

//Utilização do método use para criação das rotas
app.use("/produto", rotasProdutos);
app.use("/checkout", rotasOrders);
app.use("/login", rotasLogin);
app.use("/cadastro",cadastroRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render("error404");
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
