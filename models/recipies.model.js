"use strict";

const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  userId: { type: Number },
  recipeId: { type: Number, unique: true },
  commentId: { type: String },
  likes: { type: Number },
  rateId: { type: Number },
  dishImg: { type: String },
  dishTitle: { type: String },
  dishInfo: { type: String },
  createDate: { type: String },
  lastModifiedDate: { type: String },
});

module.exports = recipesSchema;
