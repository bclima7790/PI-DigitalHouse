const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

router.get("/", productsController.productPage);

module.exports = router;