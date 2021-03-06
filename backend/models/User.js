const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
  },
  telephone: {
    type: Number,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  orderHistory: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order"
    }
  ]
});

//middleware that runs before every mongodb save call via mongoose
//user authentication 

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) next();
  bcrypt.hash(this.password, 10, (err, passwordHashed) => {
    if (err) return next(err)
    this.password = passwordHashed
    next()
  })
})


//gets call from passport local strategy to compare password submitted from client with password on user in db
UserSchema.methods.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, (err, isMatch) => {
    if (err) {
      return cb(err)
    } else {
      if (!isMatch) return cb(null, isMatch)
      return cb(null, this)
    }
  })
}

module.exports = mongoose.model('User', UserSchema)
