// const Product = require('../models/productModel');

// // Get all products
// const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Add a product (for admin)
// const addProduct = async (req, res) => {
//   const { name, price, description, imageUrl } = req.body;
  
//   const product = new Product({
//     name,
//     price,
//     description,
//     imageUrl,
//   });

//   try {
//     await product.save();
//     res.status(201).json(product);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// module.exports = { getProducts, addProduct };

// productController.js

const Product = require('../models/productModel');

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a product (for admin)
const addProduct = async (req, res) => {
  const { name, price, description, imageUrl } = req.body;
  
  const product = new Product({
    name,
    price,
    description,
    imageUrl,
  });

  try {
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getProducts, addProduct };
