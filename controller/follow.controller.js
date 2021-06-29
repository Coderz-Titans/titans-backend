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
      let numOfLoop = userData.page[0].following.length;
      let flag=true;
      if (!numOfLoop) {
        numOfLoop = 1;
        flag=false;
      }
        for (let i = 0; i < numOfLoop; i++) {
          if (flag && userIds === userData.page[0].following[i].userIds) {
            userData.page[0].following.splice(i, 1);
            userData.save();
            userModel.findOne({ email: userIds }, (error, hisData) => {
              for (let j = 0; j < hisData.page[0].followersData.length; j++) {
                if (email === hisData.page[0].followersData[j].userIds) {
                  hisData.page[0].followersData.splice(j, 1);
                  hisData.save();
                  response.json(userData);
                  break;
                }
              }
            });
            break;
          } else if (
            i === userData.page[0].following.length - 1 ||
            userData.page[0].following.length === 0
          ) {
            userData.page[0].following.push({
              userIds: userIds,
              usersImg: usersImg,
              usersName: usersName,
            });
            numOfLoop = userData.page[0].following.length;
            userData.save();

            // TODO: how to get anther user data ??
            userModel.findOne({ email: userIds }, (error, hisData) => {
              console.log(hisData);
              hisData.page[0].followersData.push({
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
