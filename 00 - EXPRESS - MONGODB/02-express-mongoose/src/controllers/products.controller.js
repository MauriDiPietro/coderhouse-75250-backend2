import { productManager } from "../manager/product.manager.js";

export const getAll = async (req, res, next) => {
  try {
    const response = await productManager.getAll();
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const create = async (req, res, next) => {
  try {
    const response = await productManager.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

export const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productManager.getById(id);
    if (!response) throw new Error("Product not found");
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productManager.update(id, req.body);
    if (!response) throw new Error("Product not found");
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    const response = await productManager.delete(id);
    if (!response) throw new Error("Product not found");
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};
