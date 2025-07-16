const express = require("express");
const app = express();
const port = 3000;

///loading middleware into the app

//middleware -logging, auth, validation

// //creation of a middleware
// const loggingMiddleware = function (req, res, next) {
//   console.log("LOGGING krra hu");
//   next();
// };


// const authMiddleware = function (req, res, next) {
//   console.log("auth krra hu");
//   //res.send("Chalo seedha ghar");
//   next();
// };


// const validationMiddleware = function (req, res, next) {
//   console.log("validation krra hu");
//   next();
// };

// //loading middlewware into application
// app.use(validationMiddleware);
// app.use(loggingMiddleware);
// app.use(authMiddleware);

const route = require('./routes/route')
//mounting the routes
app.use('/api', route)

// -> /api/student
// -> /api/admin


app.get("/", (req, res) => {
  console.log("Main route handler hu");
  console.log(req.body);
  res.send("ZAZA MERCCHANT!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
