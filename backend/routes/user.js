const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../passport");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

require("dotenv").config();

const signToken = (userId) => {
  return jwt.sign(
    {
      iss: "FridaBolin",
      sub: userId,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: 60 * 60 * 24,
    }
  );
};
//token går ut inom ett dygn

//save new user to db
//längst ned under newuser.save() körs så anropas User.js middelware funktion som
//kollar på lösenordet och hashar den för att sedan sätta lösenordet.
userRouter.post("/register", (req, res) => {
  const { username, password, role } = req.body;
  User.findOne({ username }, (err, user) => {
    if (err) {
      res
        .status(500)
        .json({ msg: { msgBody: "An error occurred", msgError: true } });
    }
    if (user) {
      res
        .status(400)
        .json({ msg: { msgBody: "Username already taken", msgError: true } });
    } else {
      const newUser = new User({ username, password, role });
      newUser.save((err) => {
        if (err) {
          res
            .status(500)
            .json({ msg: { msgBody: "An error occurred", msgError: true } });
        } else {
          res.status(201).json({
            msg: { msgBody: "Account successfully created", msgError: false },
          });
        }
      });
    }
  });
});

//innan callbacken körs går den in i passport och hittar localstrategy
//runs local strategy middleware (passport.js file) and sets cookie to jwt created through our signToken() function

userRouter.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    if (req.isAuthenticated()) {
      const { _id, username, role } = req.user;
      const token = signToken(_id);
      res.cookie("access-token", token, { httpOnly: true, sameSite: true });
      res.status(200).json({
        isAuthenticated: true,
        user: { _id, username, role },
        msg: { msgBody: "Successfully logged in", msgError: false },
      });
    }
  }
);

userRouter.get(
  "/authenticated",
  passport.authenticate("user-rule", { session: false }),
  (req, res) => {
    const { _id, username, role } = req.user;
    res.status(200).json({
      isAuthenticated: true,
      user: { _id, username, role },
    });
  }
);

userRouter.get(
  "/logout",
  passport.authenticate("user-rule", { session: false }),
  (req, res) => {
    res.clearCookie("access-token");
    res
      .status(200)
      .json({ msg: { msgBody: "Successfully logged out", msgError: true } });
  }
);




module.exports = userRouter;
