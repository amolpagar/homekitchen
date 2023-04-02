var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var chefsRouter = require("./routes/chef_apis");
var customersRouter = require("./routes/customer");

var app = express();
const api = process.env.API_URL;

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(`/v1/chef`, chefsRouter);
app.use(`/v1/customer`, customersRouter);

const mongoose = require("mongoose");
const { MONGODB_CONNECT_URL } = require("./db/constants");

mongoose
  .connect(MONGODB_CONNECT_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

module.exports = app;
