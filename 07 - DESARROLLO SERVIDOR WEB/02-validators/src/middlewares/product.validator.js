import { check, validationResult } from "express-validator";

export const productValidator = [
    // param("id")
  check("name")
    .exists()
    .isString()
    .not()
    .isEmpty(),
  check("description")
    .exists()
    .isString()
    .not()
    .isEmpty(),
  check("price")
    .exists()
    .isInt()
    .not()
    .isEmpty(),
  check("stock")
    .exists()
    .isInt()
    .not()
    .isEmpty(),
  (req, res, next) => {
    try {
      validationResult(req).throw();
      return next();
    } catch (error) {
      res.status(400).send(error);
    }
  },
];
