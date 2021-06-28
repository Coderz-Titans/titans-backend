"use strict";

const { userModel } = require("../models/users.model");
//////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////////////////////
const deleteRecipes = (request, response) => {
  const recipesIndex = request.params.recipes_id;
  const { email } = request.query;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      userData.page[0].recipes.map((item, index) => {
        if (recipesIndex === item._id.toString()) {
          userData.page[0].recipes.splice(index, 1);
          userData.save();
          response.send(userData);
        }
      })
    }
  });
};
//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////

module.exports = {
  getRecipes,
  createRecipes,
  deleteRecipes,
};


