import dotenv from "dotenv";
// import 'dotenv/config'
// dotenv.config()

const ENV = process.argv[2];

dotenv.config({
  path:
    ENV === "prod"
      ? "./.env.prod"
      : 
    ENV === "qas"
      ? "./.env.qas"
      : "./.env.dev",
});

export default {
  ENV: ENV,
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
};
