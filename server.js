const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
// const axios = require('axios');

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(6363);
