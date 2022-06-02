const express = require("express");
const submitOrderRouter = express.Router();
const SubmitOrder = require("../models/SubmitOrder");

submitOrderRouter.post("/neworder", (req, res) => {
    console.log("Order to submit: ", req.body);
    const newNote = new SubmitOrder({
      title: req.body.title,
      color: req.body.color,
    });
    newNote.save((err) => {
      if (err) {
        res.status(500).json({
          msg: {
            msgBody: "An error occured while submitting order",
            msgError: true,
          },
        });
      } else {
        res.status(201).json({
          msg: {
            msgBody: "Order was submitted",
            msgError: false,
          },
        });
      }
    });
});
  
module.exports = submitOrderRouter;