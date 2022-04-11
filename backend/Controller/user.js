const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const { nanoid } = require("nanoid");
const User = require("../model/user");
const URL = require('../constants/index')

dotenv.config();

module.exports.userCreation = async (req, res) => {
    // console.log(req)
    const currentUser = await User.findById(req.user._id);
    const checkPermission = currentUser.permissions.find(
      (x) => x.section === "admin" && x.permissionType === "w"
    )
      ? true
      : false;
    if (checkPermission) {
      const { email, name, contactNo, permissions, jobDescription } = req.body;
      let userToken = nanoid(20);
      try {
        await new User({
          email,
          name,
          contactNo,
          permissions,
          password,
          verificationToken: userToken,
        }).save();

        return res.status(201).send("User Created Successfully");
      } catch (error) {
        if (error.code === 11000) {
          return res.status(409).send("Email Already Exists");
        } else if (error.responseCode) {
          console.log(error.message);
          return res.status(error.responseCode).send(error.message);
        } else {
          console.log(error.message);
          return res.status(500).send(error.message);
        }
      }
    } else {
      return res.status(500).send("You don't have permission");
    }
  };