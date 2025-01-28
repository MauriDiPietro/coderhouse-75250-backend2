import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import MongoStore from "connect-mongo";
import { initMongoDB } from "./db/dbConfig.js";
import 'dotenv/config'
import passport from 'passport'
import './passport/local.strategy.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const sessionConfig = {
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 60000,
  },
  store: new MongoStore({
    mongoUrl:
      process.env.MONGO_URL,
    ttl: 60,
  }),
};

app.use(session(sessionConfig));

initMongoDB()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

app.use(passport.initialize());
app.use(passport.session());
/* ------------------------------------ - ----------------------------------- */
app.use("/users", usersRouter);
/* ------------------------------------ - ----------------------------------- */

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
