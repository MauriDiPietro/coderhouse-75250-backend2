import Services from "./service.manager.js";
// import { prodDao } from "../daos/mongodb/product.dao.js";
import factory from "../daos/factory.js";
const { prodDao } = factory;
import { prodRepository } from "../repository/product.repository.js";

class ProductService extends Services {
    constructor(){
        super(prodDao);
    }

    getProdById = async (id) => {
        try {
            return await prodRepository.getProdById(id);
        } catch (error) {
            throw new Error(error);
        }
    };
}

export const prodService = new ProductService();