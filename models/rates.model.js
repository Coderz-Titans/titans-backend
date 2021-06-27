"use strict";

const mongoose = require("mongoose");

const ratesSchema = new mongoose.Schema({
  userId: { type: Number },
  rate: { type: Number },
  rateId: { type: Number, unique: true },
  recipeId: { type: Number },
  createDate: { type: String },
  lastModifiedDate: { type: String },
});

module.exports = ratesSchema;
