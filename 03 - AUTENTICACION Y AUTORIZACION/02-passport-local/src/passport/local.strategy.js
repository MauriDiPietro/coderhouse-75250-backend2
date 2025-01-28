import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import * as services from "../services/user.services.js";

const strategyConfig = {
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
};

const register = async (req, email, password, done) => {
  try {
    const user = await services.getByEmail(email);
    if (user) return done(null, false, { messages: "User already exists" });
    const newUser = await services.register(req.body);
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

const login = async (req, email, password, done) => {
  try {
    const userLogin = await services.login(email, password);
    if (!userLogin)
      return done(null, false, { messages: "Error Authentication" });
    return done(null, userLogin);
  } catch (error) {
    return done(error);
  }
};

const registerStrategy = new LocalStrategy(strategyConfig, register);
const loginStrategy = new LocalStrategy(strategyConfig, login);

passport.use("register", registerStrategy);
passport.use("login", loginStrategy);

/*
req.session.passport = user._id
*/

passport.serializeUser((user, done) => {
  try {
    console.log(user)
    done(null, user._id);
  } catch (error) {
    return done(error);
  }
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await services.getById(id);
    return done(null, user);
  } catch (error) {
    return done(error);
  }
});
