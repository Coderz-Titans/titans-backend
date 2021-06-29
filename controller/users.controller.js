"use strict";

const { userModel } = require("../models/users.model");
const mongoose = require("mongoose");

const getPage = (request, response) => {
  const { email } = request.query;

  userModel.find({ email: email }, (error, data) => {
    if (error) {
      response.send(error);
    } else {
      data[0].page[0].viewsOfPage++;
      data.save().then(response.json(data[0].page[0]));
    }
  });
};
//
//////////////////////////////////////////////////////////////////////////////////
function newUser(email) {
  const user = new userModel({
    email: email,
    page: [
      {
        name: email, //defulte Name
        viewsOfPage: 0,
        pageName: email,
        coverImg:
          "https://images.unsplash.com/photo-1619526881542-c81baff85fa4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
        profileImg:
          "http://www.defineinternational.com/wp-content/uploads/2014/06/dummy-profile-300x300.png",
        info: "Edit Your Page !!",
        followersData: [],
        following: [],
        recipes: [],
      },
    ],
  });
  console.log(user);
  user.save();
  return user;
}
//////////////////////////////////////////////////////////////////////////////////

function addUser(req, res) {
  let { email } = req.body;

  userModel.find({ email: email }, (err, userData) => {
    if (err) {
      console.log("btata"); // console Delete
      res.send(err);
    } else {
      if (userData.length === 0) {
        console.log("bandora");
        console.log(email);
        const user = newUser(email);
        res.json(user);
      } else {
        console.log("khyar");
        res.json(userData);
      }
    }
  });
}

//////////////////////////////////////////////////////////////////////////////////

module.exports = { addUser, getPage };
