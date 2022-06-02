const express = require("express");
const LoginRouter = express.Router();
const Login = require("../models/Login");

LoginRouter.post("/login", (req, res) => {
    console.log("Order to submit: ", req.body);
    const newNote = new Login({
      name: req.body.title,
      password: req.body.color,
    });
    newNote.save((err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "An error occured while trying to login",
            msgError: true,
          },
        });
      } else {
        res.status(201).json({
          msg: {
            msgBody: "you are logged in",
            msgError: false,
          },
        });
      }
    });
});
  
module.exports = LoginRouter;