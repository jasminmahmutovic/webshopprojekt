const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const LoginSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//pre en slags middleware
LoginSchema.pre("save", function (next) {
  if (!this.isModified("password")) next();
  bcrypt.hash(this.password, 10, (err, passwordHashed) => {
    if (err) return next(err);
    this.password = passwordHashed;
    next();
  });
});

//compare() jämför lösenorden
LoginSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err);
    } else {
      if (!isMatch) return cb(null, isMatch);
      return cb(null, this);
    }
  });
};

module.exports = mongoose.model("Login", LoginSchema);
