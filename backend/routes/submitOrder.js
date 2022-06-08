const express = require("express");
const submitOrderRouter = express.Router();
const SubmitOrder = require("../models/SubmitOrder");

submitOrderRouter.post("/neworder", (req, res) => {
    console.log("Order to submit: ", req.body);
    const newOrder = new SubmitOrder({
      title: req.body.title,
      color: req.body.color,
      price: req.body.price,
      size: req.body.size,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      telephone: req.body.telephone,
      address: req.body.address,
      city: req.body.city,
      zipcode: req.body.zipcode,
    });
  

    newOrder.save((err) => {
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