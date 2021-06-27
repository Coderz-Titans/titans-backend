"use strict";

const { userModel } = require("../models/users.model");
const mongoose = require("mongoose");

//////////////////////////////////////////////////////////////////////////////////
function newUser(email) {
  const user = new userModel({
    email: email,
    page: [{
      name: email,
      viewsOfPage: 0,
      pageName: email,
      coverImg: "",
      profileImg: "",
      info: "",
      followersData: [],
      recipes: [],
    }],
  }
  );
  console.log(user);
  user.save();
  return user;
}
//////////////////////////////////////////////////////////////////////////////////

function addUser(req, res) {
  let { email } = req.body;

  userModel.find({ email: email }, (err, userData) => {
    if (err) {
      console.log("btata");
      res.send(err);
    }
    else {

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
  })

}

//////////////////////////////////////////////////////////////////////////////////

module.exports = addUser;
