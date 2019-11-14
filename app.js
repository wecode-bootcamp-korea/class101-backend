const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const runCrawler = require("./Crawler");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB Connected to " + process.env.MONGO_URI);
    runCrawler();
  })
  .catch(err => {
    console.log("DB Connection Error" + err.message);
  });
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization "
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Headers", "GET, POST, PUT, DELETE, PATCH");
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

module.exports = app;
