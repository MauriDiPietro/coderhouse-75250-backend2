import * as services from "../services/user.services.js";

export const register = async (req, res) => {
  try {
    res.json({
      msg: 'Register OK!',
      session: req.session
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const githubProfile = async (req, res) => {
  try {
    const user = req.user;
    res.json({ msg: "Login OK", user });
  } catch (error) {
    res.send(error.message);
  }
};


