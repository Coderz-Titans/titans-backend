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

const addUser = require("./controller/users.controller");
const updatepage = require("./controller/pages.controller");

// seedUserData();
//////////////////////////////////////////////////////////////////////////////////

mongoose.connect(MONGODB_CLINTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//////////////////////////////////////////////////////////////////////////////////
app.get("/",addUser)
//////////////////////////////////////////////////////////////////////////////////
app.put("/page/:page_idx",updatepage)
app.listen(6524);
