const express = require("express");

const ProductController = require("../controllers/product.controller");

const ProductRouter = express.Router();

//API/productos/
ProductRouter.post("/", ProductController.createNewProduct);
ProductRouter.get("/", ProductController.getAllProducts);
ProductRouter.get("/:id", ProductController.getOneProductById);


module.exports = ProductRouter;