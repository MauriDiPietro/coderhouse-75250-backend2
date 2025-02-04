import mongoose from "mongoose";
import 'dotenv/config'

export const initMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );
  } catch (error) {
    throw new Error(error);
  }
};
