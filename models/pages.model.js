"use strict";

const mongoose = require("mongoose");

const pagesSchema = new mongoose.Schema({
  userId: { type: Number },
  pageId: { type: Number, unique: true },
  viewsOfPage: { type: Number },
  pageName: { unique: true, type: String },
  coverImg: { type: String },
  info: { type: String },
  followersData: { type: Array },
});

module.exports = pagesSchema;
