"use strict";

const { pagesSchema } = require("../models/pages.model");
const mongoose = require("mongoose");

//////////////////////////////////////////////////////////////////////////////////
const { userModel } = require("../models/users.model");

const updatepage = (request, response) => {
  //   const pageIndex = request.params.page_idx;
  const {
    email,
    name,
    viewsOfPage,
    pageName,
    coverImg,
    profileImg,
    info,
    followersData,
  } = request.body;
  userModel.findOne({ email: email }, (error, pageData) => {
    if (error) {
      console.log(error.message);
      response.send(error);
    } else {
      console.log(request.body);
      pageData.page.splice(0, 1, {
        name: name,
        viewsOfPage: viewsOfPage,
        pageName: pageName,
        coverImg: coverImg,
        profileImg: profileImg,
        info: info,
        followersData: followersData,
        recipes: [],
      });
      console.log(pageData, "XxXXXXXXXXXXX");
      pageData.save();
      response.send(pageData);
    }
  });
};

//////////////////////////////////////////////////////////////////////////////////
module.exports = updatepage;
