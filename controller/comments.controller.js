"use strict";

const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema({
  user: { type: Number },
  recipyName: { type: String },
  createDate: { type: String },
  lastModifiedDate: { type: String },
});

module.exports = likesSchema;
