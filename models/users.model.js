"use strict";

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: { type: Number, unique: true },
  recipeId: { type: Number, unique: true },
  commentId: { type: String },
  likes: { type: Number },
  rateId: { type: Number },
  pageId: { type: Number },
  email: { type: String, unique: true },
  profilePic: { type: String },
  userName: { type: String },
  createDate: { type: String },
  lastModifiedDate: { type: String },
});

module.exports = userSchema;
