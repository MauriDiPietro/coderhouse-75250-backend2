import express from "express";
import productRouter from "./routes/product.router.js";
import { initMongoDB } from "./config/db.connection.js";
import { errorHandler } from "./middlewares/error.handler.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", productRouter);

app.use(errorHandler);

initMongoDB()
  .then(() => console.log("conectado a mongo"))
  .catch((error) => console.log(error));

app.listen(8080, () => console.log("Server ok en puerto 8080"));
