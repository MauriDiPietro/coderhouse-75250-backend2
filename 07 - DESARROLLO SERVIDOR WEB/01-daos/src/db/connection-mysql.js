import { Sequelize } from "sequelize";

const db = new Sequelize("coderhouse", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const initMySQL = async () => {
  try {
    await db.sync({ force: false });
    console.log('conectado a mysql')
  } catch (error) {
    throw new Error(error);
  }
};

export default db;
