import { ProductModel } from "../models/product.model.js";

class ProductManager {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    try {
      return await this.model.find({});
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(obj) {
    try {
      return await this.model.create(obj);
    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      return await this.model.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  async update(obj, id) {
    try {
      return await this.model.findByIdAndUpdate(id, obj, { new: true });
    } catch (error) {
      throw new Error(error);
    }
  }

  async delete(id) {
    try {
      return await this.model.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export const productManager = new ProductManager(ProductModel);
