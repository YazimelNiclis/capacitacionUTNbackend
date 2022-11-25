const { check, body, checkSchema, param } = require("express-validator");
const telefonos = require("../agenda");
exports.telefonosValidator = [
  check("id")
    .not()
    .isEmpty()
    .withMessage("El campo esta vacio")
    .isNumeric()
    .withMessage("Se ha ingresado un id no valido"),
  check("name")
    .not()
    .isEmpty()
    .isString()
    .withMessage("El nombre no es valido"),
  check("number")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 7 })
    .withMessage("El numero no es valido"),
];

exports.getTelefonosValidator = [
  param("numero")
    .not()
    .isEmpty()
    .withMessage("El numero no puede estar vacio")
    .isNumeric()
    .withMessage("El valor debe ser numerico"),
];
