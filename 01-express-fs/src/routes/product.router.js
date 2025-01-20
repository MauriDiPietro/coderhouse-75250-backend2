import { Router } from "express";
import * as controllers from "../controllers/products.controller.js";

const router = Router();

router.get("/", controllers.getAll);

router.post("/", controllers.create);

router.get("/:id", controllers.getById);

export default router;
