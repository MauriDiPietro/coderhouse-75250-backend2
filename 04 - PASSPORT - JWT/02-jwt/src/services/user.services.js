import { userDao } from "../daos/user/user.dao.js";
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { createHash, isValidPassword } from "../utils/utils.js";

const SECRET_KEY = process.env.SECRET_KEY;

export const generateToken = (user) => {
  const payload = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    age: user.age,
    role: user.role
  };

  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: '10m'
  });
}

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

export const getByEmail = async(email) => {
  try {
    return await userDao.getByEmail(email)
  } catch (error) {
    throw new Error(error)
  }
}

export const getById = async(id) => {
  try {
    const user = await userDao.getById(id)
    if(!user) throw new Error('User not found')
      return user;
  } catch (error) {
    throw new Error(error)
  }
}
