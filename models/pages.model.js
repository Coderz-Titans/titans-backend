"use strict";

const mongoose = require("mongoose");
const recipesSchema = require("./recipies.model");
const followingSchema = require("./following.model");
const followersSchema = require("./followers.model");


//////////////////////////////////////////////////////////////////////////////////

const pagesSchema = new mongoose.Schema(
  {
    name: { type: String },
    viewsOfPage: { type: Number, default: 0 },
    pageName: { unique: true, type: String },
    coverImg: { type: String },
    profileImg: { type: String },
    info: { type: String },
    followersData: [followersSchema],
    following: [followingSchema],
    recipes: [recipesSchema],
  },
  { timestamps: true }
);

//////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////
module.exports = pagesSchema;
