const express = require("express")
const Router = express.Router

const productsRouter = Router()

/**
 * importing controllers
 */
const { getProducts,getProductByName, addProduct, deleteProduct, updateProduct } = require("../controllers/products.controllers")


/** 
* Get a list of all products
*/
productsRouter.get("/", getProducts)

/** 
* Get a single product by id
*/
productsRouter.get("/:name", getProductByName)

/** 
* Add a new product
*/
productsRouter.post("/", addProduct)

/** 
* Delete a product by id
*/
productsRouter.delete("/:name", deleteProduct)

/** 
* Update a product by id
*/
productsRouter.patch("/:name", updateProduct)

module.exports = productsRouter