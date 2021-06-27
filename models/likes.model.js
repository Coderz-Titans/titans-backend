"use strict";

const mongoose = require("mongoose");

const likesSchema = new mongoose.Schema(
  {
    userIds: { type: [String] },
  },
  { timestamps: true }
);

module.exports = likesSchema;
