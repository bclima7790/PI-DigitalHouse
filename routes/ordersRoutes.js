const express = require("express");
const ordersController = require("../controllers/ordersController");
const router = express.Router();

router.get("/", ordersController.checkOutPage);
router.get("/confirmation", ordersController.successPage);
router.get("/orders", ordersController.ordersPage);

module.exports = router;