const mongoose = require("mongoose");

const SubmitOrderSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SubmitOrder", SubmitOrderSchema);