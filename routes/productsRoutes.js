const express = require("express");
const productsController = require("../controllers/productsController");
const router = express.Router();

router.get("/", productsController.productPage);
router.get("/lista", productsController.productList);


module.exports = router;