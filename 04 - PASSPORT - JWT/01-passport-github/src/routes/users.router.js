import { Router } from "express";
import * as controllers from "../controllers/user.controller.js";
import passport from "passport";
import { isAuth } from "../middlewares/isAuth.js";
import { passportCall } from "../passport/passportCall.js";
const router = Router();

//! --> |INICIAR CON GITHUB|
router.get(
  "/register-github",
  passportCall("github", { scope: ["user:email"] })
  // passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/profile",
  passportCall("github", { scope: ["user:email"] }),
  // passport.authenticate("github", { scope: ["user:email"] }),
  controllers.githubProfile
  // (req, res) => res.send('ok')
);

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.send("logout ok");
});

export default router;
