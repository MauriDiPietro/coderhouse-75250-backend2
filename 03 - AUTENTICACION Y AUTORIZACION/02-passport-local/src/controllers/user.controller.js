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

export const login = async (req, res) => {
  try {
    //req.session.passport.user
    console.log(req.session)
    const id = req.session.passport.user;
    const user = await services.getById(id);
    res.json({ msg: "Login OK", user });
  } catch (error) {
    res.send(error.message);
  }
};


