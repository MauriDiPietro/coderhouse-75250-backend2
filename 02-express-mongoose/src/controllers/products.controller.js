import { productManager } from "../manager/product.manager.js";

export const getAll = async (req, res) => {
  try {
    const response = await productManager.getAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const response = await productManager.create(req.body);
    res.status(201).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
}

export const getById = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await productManager.getById(id);
      if (!response)
        return res.status(404).json({ message: "Product not found" });
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
