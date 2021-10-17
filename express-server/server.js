"use strict";
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const serverless = require("serverless-http");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const mongoDB = require("./config/database");

const principalRouter = require("./routes/index");
require("dotenv").config();

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Offer Market API",
      description: "Offer Market API Documentation",
      contact: {
        name: "David Vallecios",
      },
      servers: [
        {
          url: "http://localhost:3001/.netlify/functions/server/api/v1",
          description: "Development server",
        },
      ],
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

mongoDB.connect();
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  next();
});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", principalRouter);
app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
module.exports.handler = serverless(app);
