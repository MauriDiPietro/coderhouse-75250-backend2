import { userDao } from "../daos/user/user.dao.js";

export const register = async (user) => {
  try {
    const { email } = user;
    const existUser = await userDao.getByEmail(email);
    if (existUser) throw new Error("User already exists");
    return await userDao.register({
      ...user
    });
  } catch (error) {
    throw error;
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
