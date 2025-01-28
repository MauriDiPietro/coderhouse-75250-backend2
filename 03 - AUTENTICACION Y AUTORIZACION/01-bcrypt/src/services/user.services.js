import { userDao } from "../daos/user/user.dao.js";
import { createHash, isValidPassword } from "../utils/utils.js";

export const register = async (user) => {
  try {
    const { email, password } = user;
    const existUser = await userDao.getByEmail(email);
    if (existUser) throw new Error("User already exists");
    if (email === "adminCoder@coder.com" && password === "adminCod3r123") {
      return await userDao.register({
        ...user,
        password: createHash(password),
        role: "admin",
      });
    }
    return await userDao.register({
      ...user,
      password: createHash(password),
    });
  } catch (error) {
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userExist = await userDao.getByEmail(email);
    if (!userExist) throw new Error("User not exists");
    const passValid = isValidPassword(password, userExist);
    if(!passValid) throw new Error("Invalid Credentials");  //401
    return userExist
  } catch (error) {
    throw error
  }
};
