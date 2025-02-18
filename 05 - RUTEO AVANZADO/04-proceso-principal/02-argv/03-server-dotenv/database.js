import { connect } from "mongoose";
// import 'dotenv/config'  //--> .env
import dotenv from "dotenv";

const ENV = process.argv[2];

dotenv.config({
  path:
    ENV === "prod"
      ? "./.env.prod"
      : ENV === "qas"
      ? "./.env.qas"
      : "./.env.dev",
});

export const initMongoDB = async () => {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    throw new Error(error);
  }
};
