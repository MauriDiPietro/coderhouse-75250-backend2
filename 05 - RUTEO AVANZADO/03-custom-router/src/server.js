import express from "express";
import cookieParser from "cookie-parser";
import { __dirname } from "./utils.js";
import { initMongoDB } from "./db/connection.js";
import { userCustomRouter } from './routes/users.customRouter.js'
import { errorHandler } from "./middlewares/errorHandler.js";
import 'dotenv/config' 


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/users', userCustomRouter.getRouter());

app.use(errorHandler);

initMongoDB();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});
