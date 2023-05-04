const express = require("express");
const product = require("../model/product");

const { product } = require("./controllers/product");
const router = express.Router;
router.route("/api/products").get(product);

module.exports = router;
