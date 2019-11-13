const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const runCrawler = require("./Crawler");
const routes = require("routes");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

routes(app);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB Connected to " + process.env.MONGO_URI);
    // runCrawler();
  })
  .catch(err => {
    console.log("DB Connection Error" + err.message);
  });
mongoose.Promise = global.Promise;

module.exports = app;
