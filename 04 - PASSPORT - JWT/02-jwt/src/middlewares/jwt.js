import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET_KEY = process.env.SECRET_KEY;

export const extractTokenFromHeaders = async (req, res, next) => {
  try {
    const token = req.get("Authorization");
    if (!token) return res.status(401).json({ msg: "Unauthorized" });
    //"Bearer dfsdfsdlfkjsdlfjkw5434lk534lk5jlkdfksf"
    const tokenClean = token.split(" ")[1]; //["Bearer", "dfsdfsdlfkjsdlfjkw5434lk534lk5jlkdfksf"]
    //"dfsdfsdlfkjsdlfjkw5434lk534lk5jlkdfksf"
    const decodeToken = jwt.verify(tokenClean, SECRET_KEY);
    req.user = decodeToken;
    next();
  } catch (error) {
    throw new Error(error);
  }
};

export const extractTokenFromCookies = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    const decodeToken = jwt.verify(token, SECRET_KEY);
    req.user = decodeToken;
    next();
  } catch (error) {
    throw error;
  }
};
