const express = require("express");
const router = express.Router();
const {
  listUser,
  login,
  register,
  photo,
  info,
} = require("../controllers/user");
const { verifyToken } = require("../validators/auth");
const { runValidation } = require("../validators/index");
const { userValidator, loginValidator } = require("../validators/user");

router.get("/user/list", verifyToken, listUser);
router.get("/user/info", verifyToken, info);
router.post("/user/login", loginValidator, runValidation, login);
router.post("/user/register", verifyToken, register);
router.get("/user/photo/:id", photo);

module.exports = router;
