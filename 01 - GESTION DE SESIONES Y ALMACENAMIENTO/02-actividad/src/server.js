import express from "express";
import cookieParser from "cookie-parser";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import "dotenv/config";
import loginRouter from "./routes/login.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();

const SECRET_KEY = process.env.SECRET_KEY;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(SECRET_KEY));

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/login", loginRouter);
app.use("/", viewsRouter);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
