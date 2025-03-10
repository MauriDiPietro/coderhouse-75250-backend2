import { Router } from "express";
import { productController } from "../controllers/product.controller.js";

const router = Router()

router.post('/', productController.create);

router.get('/', productController.getAll);

//APLICA DTO
router.get('/:id', productController.getProdById);

export default router