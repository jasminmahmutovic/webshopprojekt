const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
   body: {
     type: String, 
     require: true
   },
   email:{
     type: String,
     require: true
   }

});

module.exports = mongoose.model("Email", EmailSchema);