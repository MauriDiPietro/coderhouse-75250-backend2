import Services from "./service.manager.js";
// import { prodDao } from "../daos/mongodb/product.dao.js";
import persistence from "../daos/persistence.js";
const { prodDao } = persistence;

class ProductService extends Services {
    constructor(){
        super(prodDao);
    }
}

export const prodService = new ProductService();