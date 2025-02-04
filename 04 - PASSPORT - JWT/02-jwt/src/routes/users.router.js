import { Router } from "express";
import * as controllers from "../controllers/user.controller.js";
import { extractTokenFromCookies, extractTokenFromHeaders } from "../middlewares/jwt.js";

const router = Router();

router.post("/register", controllers.register);

router.post("/login", controllers.login);

router.get("/private-headers", extractTokenFromHeaders, (req, res, next) => {
  try {
    if(!req.user) throw new Error('No se puede acceder a los datos del usuario');
    return res.json(req.user)
  } catch (error) {
    next(error)
  }
});

router.get("/private-cookies", extractTokenFromCookies, (req, res, next) => {
  try {
    if(!req.user) throw new Error('No se puede acceder a los datos del usuario');
    return res.json(req.user)
  } catch (error) {
    next(error)
  }
});

export default router;
