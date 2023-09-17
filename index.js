
/**
 * Muhammad UMAR FAROOQ
 * Initializing environment variables
 */
require('dotenv').config()

const express = require("express")
const { connectDB } = require("./store/connectDB")

const server = express()

/**
 * Connecting to Database
 */
connectDB()

/**
 * Importing routers
 */
const productsRouter = require("./routes/products.routes")


/** 
* Body parser
*/
server.use(express.urlencoded({ extended: false }))
server.use(express.json())


/**
 * Registering routers
 */
server.use("/products", productsRouter)


server.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

server.listen(3001, () => {
  console.log("Server is started...")
})