import { body } from "express-validator";

const parrotValidators = [
  body("species")
    .isLength({ min: 3, max: 80 })
    .withMessage("too long characters"),
  body("species").isLength(5),
  body("species").isAlpha("en-US", { ignore: " " }),
  body("notes").isLength({ min: 10, max: 150 }).withMessage("test"),
];

export default parrotValidators;
