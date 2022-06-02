const mongoose = require("mongoose");

const SubmitOrderSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname:{
      type:String,
      required:true,
  },
  mail:{
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  file:{
      type:String
  }
});

module.exports = mongoose.model("SubmitOrder", SubmitOrderSchema);