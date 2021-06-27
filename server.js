const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
// const axios = require('axios');
app.use(express.json());
const MONGODB_CLINTE = process.env.MONGODB_CLINTE;
const mongoose = require("mongoose");
const { seedUserData } = require("./models/users.model");
// seedUserData();
mongoose.connect(MONGODB_CLINTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(6363);
