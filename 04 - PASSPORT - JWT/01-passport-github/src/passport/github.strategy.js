import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github2";
import * as services from "../services/user.services.js";
import 'dotenv/config'

const strategyConfig = {
  clientID: process.env.CLIENT_ID_PG,
  clientSecret: process.env.CLIENT_SECRET_PG,
  callbackURL: "http://localhost:8080/users/profile",
};

const registerOrLogin = async (accessToken, refreshToken, profile, done) => {
  try {
    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(profile);
    /*
     _json: {
        avatar_url: 'https://avatars.githubusercontent.com/u/74677356?v=4',
        name: 'Mauri Di Pietro',
        location: 'Córdoba, Argentina',
        email: 'dipietro.jm@gmail.com'
    }
    */
    const email = profile._json.email;
    if (!email) throw new Error("Invalid email");
    const user = await services.getByEmail(email);
    if (user) return done(null, user);
    const newUser = await services.register({
      name: profile._json.name ? profile._json.name : email,
      email,
      image: profile._json.avatar_url || "",
    });
    if(!newUser) throw new Error('Error register user')
    return done(null, newUser);
  } catch (error) {
    return done(null, error);
  }
};

passport.use("github", new GithubStrategy(strategyConfig, registerOrLogin));

/*
req.session.passport = user._id
*/

passport.serializeUser((user, done) => {
  try {
    console.log(user);
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
