const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');

// Routes
router.get('/', getProducts);  // GET request for fetching products
router.post('/add', addProduct);  // POST request for adding a product

module.exports = router;
