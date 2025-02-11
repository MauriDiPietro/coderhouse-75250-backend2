import Router from "./class.customRouter.js";
import * as userController from "../controllers/user.controller.js";

export default class UserCustomRouter extends Router {
  init() {
    this.get("/", ["PUBLIC"], (req, res) => {
      res.send("ruta publica");
    });

    this.post("/register", ["PUBLIC"], userController.register);
    this.post("/login", ["PUBLIC"], userController.login);
    this.get("/private", ["USER", "ADMIN"], userController.profile);
    this.get("/admin", ["ADMIN"], (req, res) => {
      res.send("ruta solo admins");
    });
  }
}

export const userCustomRouter = new UserCustomRouter();
