"use strict";
const { userModel } = require("../models/users.model");

const handelFollow = (request, response) => {
  // const pageId = request.params.page_id;
  const { email, usersImg, userIds, usersName } = request.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      response.send(error);
    } else {
      // if (email === userData.page[0].following[i].userIds)
      for (let i = 0; i < userData.page[0].following.length; i++) {
        if (userIds === userData.page[0].following[i].userIds) {
          userData.page[0].following.splice(i, 1);
          userData.save();
          userModel.findOne({ email: userIds }, (error, hisData) => {
            for (let j = 0; j < hisData.page[0].followers.length; j++) {
              if (email === hisData.page[0].followers[j].userIds) {
                hisData.page[0].followers.splice(j, 1);
                hisData.save();
                response.json(userData);
                break;
              }
            }
          });
          break;
        } else if (i === userData.page[0].following.length - 1) {
          userData.page[0].following.push({
            userIds: userIds,
            usersImg: usersImg,
            usersName: usersName,
          });
          userData.save();

          // TODO: how to get anther user data ??
          userModel.findOne({ email: userIds }, (error, hisData) => {
            hisData.page[0].followers.push({
              userIds: userData.email,
              usersImg: userData.page[0].profileImg,
              usersName: userData.page[0].name,
            });
            hisData.save();
            response.json(userData);
          });
        }
      }
    }
  });
};

module.exports = { handelFollow };
