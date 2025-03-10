import { connect } from "mongoose";

class ConnectMongoDB {
  static #instance = null;

  constructor() {
    connect("mongodb://localhost:27017/coderhouse");
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


const conn1 = ConnectMongoDB.getInstance();
const conn2 = ConnectMongoDB.getInstance();
const conn3 = ConnectMongoDB.getInstance();