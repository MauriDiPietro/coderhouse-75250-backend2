import { Router } from "express";
import { userDao } from "../daos/user/user.dao.js";
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = null;
    if (email === "adminCoder@coder.com" && password === "adminCod3r123") {
      user = await userDao.register({
        ...req.body,
        role: "admin",
      });
    } else user = await userDao.register(req.body);
    if (!user) return res.redirect("/errorRegistro");
    return res.redirect("/");
  } catch (error) {
    res.send(error.message);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userDao.login(email, password);
    if (user) {
      req.session.email = email;
      res.render("perfil", { user });
    } else res.redirect("/errorLogin"); //401
  } catch (error) {
    res.send(error.message);
  }
});

export default router;
