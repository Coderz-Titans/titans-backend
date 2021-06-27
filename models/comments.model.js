"use strict";

const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    userIds: { type: [String] },
    commentText: { type: [String] },
  },
  { timestamps: true }
);

module.exports = commentsSchema;
