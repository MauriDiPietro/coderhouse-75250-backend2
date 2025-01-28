import { Router } from "express";
import * as controllers from "../controllers/user.controller.js";
import passport from "passport";
import { isAuth } from "../middlewares/isAuth.js";
import { passportCall } from "../passport/passportCall.js";
const router = Router();

router.post(
  "/register",
    passport.authenticate("register"),
  controllers.register
);

router.post(
  "/login",
  passport.authenticate("login"),
  controllers.login
);

router.get("/private", isAuth, (req, res) => res.send("RUTA PRIVADA"));

export default router;
