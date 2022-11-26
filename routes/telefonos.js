/* const express = require("express");
const router = express.Router();
const {
  list,
  searchTelefono,
  addTelefono,
  probandoJoin,
} = require("../controllers/telefono");
const { runValidation } = require("../validators");
const {
  telefonosValidator,
  getTelefonosValidator,
} = require("../validators/telefonos");
const { verifyToken } = require("../validators/auth");
const { verifyPerfil1 } = require("../validators/perfil");

router.get("/telefonos", verifyToken, verifyPerfil1, list);
router.get("/telefonosJoin/:id", verifyToken, probandoJoin);
router.get(
  "/cliente/:numero",
  getTelefonosValidator,
  runValidation,
  verifyToken,
  searchTelefono
);
router.post(
  "/telefonos/nuevo",
  telefonosValidator,
  runValidation,
  verifyToken,
  addTelefono
); */

/* module.exports = router; */
