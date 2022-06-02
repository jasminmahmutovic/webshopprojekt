const express = require("express");
const EmailRouter = express.Router();
const Email = require("../models/SubmitOrder");

EmailRouter.post("/neworder", (req, res) => {
    console.log("Order to submit: ", req.body);
    const newNote = new Email({
      name: req.body.name,
      lastname: req.body.lastname,
      mail: req.body.mail,
      message: req.body.message,
      file: req.body.file
    });
    newNote.save((err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "An error occured while sending email",
            msgError: true,
          },
        });
      } else {
        res.status(201).json({
          msg: {
            msgBody: "Email is sending",
            msgError: false,
          },
        });
      }
    });
});
  
module.exports = Email;