import MySqlDao from './mysql.dao.js';
import { ProductModel } from './models/product.model.js';

class ProductDaoMySql extends MySqlDao {
    constructor(){
        super(ProductModel);
    }
}

export const prodDao = new ProductDaoMySql();