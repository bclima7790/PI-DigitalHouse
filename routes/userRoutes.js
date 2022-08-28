const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();

router.get("/", userController.loginPage);
router.get('/esqueciSenha', userController.esqueciSenhaPage);
router.get('/paginaDePerfil', userController.perfilPage);



module.exports = router;