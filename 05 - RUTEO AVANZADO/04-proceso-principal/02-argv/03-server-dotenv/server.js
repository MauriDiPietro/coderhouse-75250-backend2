import express from 'express';
import dotenv from 'dotenv'
import './database.js';

const ENV = process.argv[2];

dotenv.config({
  path:
    ENV === "prod"
      ? "./.env.prod"
      : ENV === "qas"
      ? "./.env.qas"
      : "./.env.dev",
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on port ${PORT} in ${ENV} mode`);
});



