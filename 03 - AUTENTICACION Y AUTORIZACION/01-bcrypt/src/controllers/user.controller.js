import * as services from "../services/user.services.js";

export const register = async (req, res) => {
  try {
    const user = await services.register(req.body);
    res.json(user);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await services.login(email, password);
    res.json({ msg: "Login OK", user });
  } catch (error) {
    res.send(error.message);
  }
};
