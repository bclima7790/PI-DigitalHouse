const express = require("express");
const cadastroController = require("../controllers/cadastroController");
const router = express.Router();

router.get("/", cadastroController.sign);

module.exports = router;