"use strict";

const { userModel } = require("../models/users.model");

// get recipes
const getRecipes = (request, response) => {
  const { email } = request.query;

  userModel.find({ email: email }, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      response.json(data[0].page[0].recipes);
    }
  });
};

// Create Recipes
const createRecipes = (request, response) => {
  const { email, dishImg, dishTitle, dishInfo } = request.body;

  userModel.findOne({ email: email }, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      data.page[0].recipes.push({
        dishImg: dishImg,
        dishTitle: dishTitle,
        dishInfo: dishInfo,
        likes: [],
        rates: [],
        comments: []
      });
      data.save();
      response.json(data);
    }
  });
};

module.exports = {
  getRecipes,
  createRecipes,
};
