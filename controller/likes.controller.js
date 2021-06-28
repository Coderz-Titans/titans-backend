"use strict";
const { userModel } = require("../models/users.model");


const createLike = (request, response) => {
  const recipesId = request.params.recipes_id;
  const { email, usersImg, userIds, usersName } = request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      console.log(userData);
      for (let index = 0; index < userData.page[0].recipes.length; index++) {
        if (recipesId === userData.page[0].recipes[index]._id.toString()) {
          console.log("I AM IN Like >>>>>>>>>>>>>>>");

          userData.page[0].recipes[index].likes.push({
            userIds: userIds,
            usersImg: usersImg,
            usersName: usersName,
          });

          userData.save();
          response.json(userData);
          console.log(">>>>>>>>>>", index);
          break;
        }
        console.log(index);
      }
    }
  });
};

module.exports = {
  createLike,
};
