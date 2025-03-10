import factory from "../daos/factory.js";
const { prodDao } = factory;
import ProductResDTO from "../dtos/product.res.dto.js";
import ProductReqDTO from "../dtos/product.req.dto.js";

class ProductRepository {
  constructor() {
    this.dao = prodDao;
  }

  createProd = async (product) => {
    try {
      const prodDTO = new ProductReqDTO(product);
      return await this.dao.create(prodDTO);
    } catch (error) {
      throw new Error(error);
    }
  };

  getProdById = async (id) => {
    try {
      const response = await this.dao.getById(id);
      return new ProductResDTO(response);
    } catch (error) {
      throw new Error(error);
    }
  };
}

export const prodRepository = new ProductRepository();
