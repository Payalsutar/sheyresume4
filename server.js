const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const cors = require("cors");


const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
app.use(express.json());
require("./db");

const userRoute = require('./routes/userRoute')







app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/api/users',userRoute);

app.get('/',(req,res)=>res.send('Hello World!'))

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

