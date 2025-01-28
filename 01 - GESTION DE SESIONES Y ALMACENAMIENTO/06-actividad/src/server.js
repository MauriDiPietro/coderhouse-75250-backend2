import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import MongoStore from "connect-mongo";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import { initMongoDB } from "./db/dbConfig.js";
import 'dotenv/config'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

const sessionConfig = {
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: false,
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

app.use("/users", usersRouter);
app.use("/", viewsRouter);

const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
