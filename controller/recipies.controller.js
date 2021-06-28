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
const createRecipe = (request, response) => {
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
const deleteRecipe = (request, response) => {
  const recipesId = request.params.recipes_id;
  const { email } = request.query;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      // userData.page[0].recipes.forEach((item, index) => {
      //   if (recipesId === item._id.toString()) {
      //     userData.page[0].recipes.splice(index, 1);
      //     userData.save();
      //     response.send(userData)
      //      console.log("index :",index);
      //      break;
      //   })
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === item._id.toString()) {
          userData.page[0].recipes.splice(index, 1);
          userData.save();
          response.send(userData)
          console.log("index :", index);
          break;
        }
        console.log(index);
      }
}
  });
};
//////////////////////////////////////////////////////////////////////////////////
const updateRecipe = (request, response) => {
  const bookIndex = request.params.recipes_idx;
  // const { userEmail, bookName } = request.body;
  const { userEmail, bookName, bookDescription, bookState } = request.body;
  userModel.findOne({ email: userEmail }, (error, userData) => {
    if (error) {
      response.send(error)
    } else {
      userData.page[0].recipes.map((item, index) => {
        if (recipesId === item._id.toString()) {
          userData.books.splice(index, 1, {
            name: bookName,
            description: bookDescription,
            state: bookState,
          });
          userData.save();
          response.send(userData)
        }
      })

    }
  });
}
//////////////////////////////////////////////////////////////////////////////////

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipe,
};


