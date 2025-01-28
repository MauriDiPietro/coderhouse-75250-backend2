import { Router } from "express";
import * as controllers from '../controllers/user.controller.js'
const router = Router();

router.post("/register", controllers.register);

router.post("/login", controllers.login);

export default router;
