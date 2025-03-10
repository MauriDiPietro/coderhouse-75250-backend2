import { prodService } from "../services/product.service.js"
import Controllers from "./controller.manager.js"

class ProductController extends Controllers{
    constructor(){
        super(prodService)
    }
}

export const productController = new ProductController();