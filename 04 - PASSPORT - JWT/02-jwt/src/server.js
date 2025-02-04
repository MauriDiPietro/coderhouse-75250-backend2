import express from "express";
import { __dirname } from "./utils.js";
import usersRouter from "./routes/users.router.js";
import { initMongoDB } from "./db/dbConfig.js";
import 'dotenv/config'
import { errorHandler } from "./middlewares/errorHandler.js";
import cookieParser from 'cookie-parser'

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

initMongoDB()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

/* ------------------------------------ - ----------------------------------- */
app.use("/users", usersRouter);
/* ------------------------------------ - ----------------------------------- */

app.use(errorHandler);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
