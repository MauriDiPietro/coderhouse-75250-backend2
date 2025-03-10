import { Router } from "express";
import { productController } from "../controllers/product.controller.js";
import { productValidator } from "../middlewares/product.validator.js";

const router = Router()

router.post('/', [productValidator], productController.create);

export default router