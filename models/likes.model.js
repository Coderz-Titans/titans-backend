"use strict";

const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({
  userId: { type: Number },
  recipeId: { type: Number },
  createDate: { type: String },
  lastModifiedDate: { type: String },
});

module.exports = likesSchema;
