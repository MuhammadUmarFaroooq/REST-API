const mongoose = require("mongoose")
const Product = require("../schemas/product.schema")


const getProducts = async (req, res) => {
  try {

    const products = await Product.find();

    res.status(200).json({
      message: "Users retrieved successfully",
      products: products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const getProductByName = async (req, res) => {
    try {
      const productName = req.params.name; 
      const product = await Product.findOne({ name: productName });
  
      if (!product) {
        return res.status(404).json({ error: "Product not found." });
      }
  
      res.status(200).json({
        message: "Product retrieved successfully",
        product: product,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };



const addProduct = async (req, res) => {
  try {
    const productData = req.body;

    const productToAdd = new Product({
      _id: new mongoose.Types.ObjectId(),
      name: productData.name,
      price: productData.price,
    });

    // Save the new product to the database
    await productToAdd.save();

    res.status(201).json({
      message: "Product created.",
      product: productToAdd,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


const deleteProduct = async (req, res) => {
    try {
      const productName = req.params.name; 
  
   
      const deletedProduct = await Product.findOneAndRemove({ name: productName });
  
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found." });
      }
  
      res.status(200).json({
        message: "Product deleted.",
        product: deletedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  const updateProduct = async (req, res) => {
    try {
      const productName = req.params.name; 
      const updatedProductData = req.body;
  
      
      const updatedProduct = await Product.findOneAndUpdate(
        { name: productName },
        updatedProductData,
        { new: true } 
      );
  
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found." });
      }
  
      res.status(200).json({
        message: "Product updated.",
        product: updatedProduct,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

module.exports = {getProducts,getProductByName,  addProduct, deleteProduct, updateProduct }