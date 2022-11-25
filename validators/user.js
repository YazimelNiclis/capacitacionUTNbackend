const { check } = require("express-validator");

exports.userValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email inválido"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Se requiere contraseña")
    .isLength({ min: 8, max: 120 })
    .withMessage("Se requiere un mínimo de 8 caracteres en la contrasenia"),
  check("nombre").isString().withMessage("El nombre no debe contener números"),
];

exports.loginValidator = [
  check("email")
    .not()
    .isEmpty()
    .withMessage("Se requiere el email")
    .isEmail()
    .withMessage("Formato de email inválido"),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Se requiere contraseña")
    .isLength({ min: 8, max: 120 })
    .withMessage("Se requiere un mínimo de 8 caracteres en la contrasenia"),
];
