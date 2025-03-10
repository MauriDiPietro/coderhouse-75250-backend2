import { prodDao as prodDaoMongo } from "./mongodb/product.dao.js";
import { prodDao as prodDaoFS } from "./filesystem/product.dao.js";
//import { userDao } .......

import ConnectMongoDB from "../db/connection.js";

let prodDao;
let userDao;
const persistence = process.argv[2];
// const persistence = 'fs'
// const persistence = process.argv.PERSISTENCE;



switch (persistence) {
  case "fs":
    prodDao = prodDaoFS;
    console.log(persistence);
    break;
  case "mongo":
    console.log(persistence);
    ConnectMongoDB.getInstance();
    prodDao = prodDaoMongo;
    break;
  default:
    prodDao = prodDaoFS;
    break;
}

export default { prodDao };
// export default { prodDao, userDao, cartDao }
