const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
require("dotenv").config();
// const axios = require('axios');
app.use(express.json());
const MONGODB_CLINTE = process.env.MONGODB_CLINTE;
const mongoose = require("mongoose");
// const { seedUserData } = require("./models/users.model");

const addUser = require("./controller/users.controller");
const updatepage = require("./controller/pages.controller");

const {
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
} = require("./controller/recipies.controller");

const {
  createComment,
  updateComment,
  deleteComment,
} = require("./controller/comments.controller");
const { createLike } = require("./controller/likes.controller");
// seedUserData();
//////////////////////////////////////////////////////////////////////////////////

mongoose.connect(MONGODB_CLINTE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//////////////////////////////////////////////////////////////////////////////////
app.post("/user", addUser);
// Recipes
app.get("/recipes", getRecipes);
app.post("/recipe", createRecipe);
app.delete("/recipe/:recipes_id", deleteRecipe);
app.put("/recipe/:recipes_id", updateRecipe);
//////////////////////////////////////////////////////////////////////////////////
app.post("/comment/:recipes_id", createComment);
app.put("/comment/:comment_id", updateComment);
app.delete("/comment/:comment_id", deleteComment);
/////////////////////////////////////////////////////////////////
app.post("/like/:recipes_id", createLike);

////////////////////////////////
app.put("/page", updatepage);

app.listen(6524);
