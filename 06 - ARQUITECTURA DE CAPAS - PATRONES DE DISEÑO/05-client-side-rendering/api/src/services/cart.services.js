import Services from "./class.services.js";
import ProductDaoMongoDB from "../daos/mongodb/product.dao.js";
const prodDao = new ProductDaoMongoDB();
import CartDaoMongoDB from "../daos/mongodb/cart.dao.js";
const cartDao = new CartDaoMongoDB();

export default class CartServices extends Services {
  constructor() {
    super(cartDao);
  }

  addProdToCart = async (cartId, prodId) => {
    try {
      const existCart = await getById(cartId);
      if (!existCart) throw new Error('cart not found');
  
      const existProd = await prodDao.getById(prodId);
      if (!existProd) throw new Error('prod not found');
  
      return await this.dao.addProdToCart(cartId, prodId);
    } catch (error) {
      throw new Error(error);
    }
  };

  removeProdToCart = async (cartId, prodId) => {
    try {
      const existCart = await getById(cartId);
      if(!existCart) throw new Error('error');
      const existProdInCart = await this.dao.existProdInCart(cartId, prodId);
      if (!existProdInCart) throw new Error('error');
      return await this.dao.removeProdToCart(cartId, prodId);
    } catch (error) {
      throw new Error(error);
    }
  };

  updateProdQuantityToCart = async (cartId, prodId, quantity) => {
    try {
      const existCart = await getById(cartId);
      if(!existCart) throw new Error('error');
  
      const existProdInCart = await this.dao.existProdInCart(cartId, prodId);
      if (!existProdInCart) throw new Error('error');
  
      return await this.dao.updateProdQuantityToCart(cartId, prodId, quantity);
    } catch (error) {
      throw new Error(error);
    }
  };

  clearCart = async (cartId) => {
    try {
      const existCart = await getById(cartId);
      if (!existCart) throw new Error('error');
      return await this.dao.clearCart(cartId);
    } catch (error) {
      throw new Error(error);
    }
  };
}
