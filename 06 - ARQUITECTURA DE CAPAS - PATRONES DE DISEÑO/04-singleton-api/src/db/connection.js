import { connect } from 'mongoose';
import 'dotenv/config'

const connectionString = process.env.MONGO_URL;

export default class ConnectMongoDB {
  static #instance = null;

  constructor() {
    connect(connectionString);
  }

  static getInstance() {
    if (this.#instance) {
      console.log("Ya está conectado a la base de datos");
      return this.#instance;
    } else this.#instance = new ConnectMongoDB();
    console.log("Conectado a la base de datos");
    return this.#instance;
  }
}


