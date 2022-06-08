const req = require("express/lib/request");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const jwtStrategy = require("passport-jwt").Strategy;
const Login = require("./models/Login");

//development env vars
require("dotenv").config();

const cookieExtractor = () => {
  let token = null;
  if (req && req.cookies) token = req.cookies["access-token"];
  return token;
};

passport.use(
  new jwtStrategy(
    {
      jwtFromRequest: "cookieExtractor",
      secretOrKey: "process.env.JWT_SECRET",
    },
    (payload, done) => {
      Login.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err);
        if (!user) return done(null, false);
        return done(null, user);
      });
    }
  )
);

//runs everytime passport local parameter is set on passports authenticate param
passport.use(
  new localStrategy((username, password, done) => {
    username.findOne({ username: username }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false);
      user.comparePassword(password, done);
    });
  })
);