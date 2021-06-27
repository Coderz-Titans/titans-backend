"use strict";

const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema({
  commentId: { type: Number },
  userId: { type: Number },
  commentText: { type: String },
  recipeId: { type: Number },
  createDate: { type: String },
  lastModifiedDate: { type: String },
});

module.exports = commentsSchema;
