"use strict";

const mongoose = require("mongoose");
const recipesSchema = require("./recipies.model");

const pagesSchema = new mongoose.Schema(
  {
    viewsOfPage: { type: Number, default: 0 },
    pageName: { unique: true, type: String },
    coverImg: { type: String },
    profileImg: { type: String },
    info: { type: String },
    followersData: { type: [Number] },
    recipes: [recipesSchema],
  },
  { timestamps: true }
);

module.exports = pagesSchema;
