"use strict";

const { pagesSchema } = require("../models/pages.model");
const mongoose = require("mongoose");

//////////////////////////////////////////////////////////////////////////////////

const updatepage = (request, response) => {
    const pageIndex = request.params.page_idx;
    const   { email,name ,viewsOfPage,pageName,coverImg,profileImg,info,followersData,}= request.body;
    userModel.findOne({ email: email }, (error, pageData) => {
        if (error) {
            response.send(error)
        } else {
            pageData.page.splice(pageIndex, 1,{ name: name,
                viewsOfPage:viewsOfPage,
                pageName: pageName,
                coverImg:coverImg,
                profileImg: profileImg,
                info: info,
                followersData: followersData,
              });
              pageData.save();
            response.send(pageData)
        }
    });
  }

  //////////////////////////////////////////////////////////////////////////////////
  module.exports = updatepage;
