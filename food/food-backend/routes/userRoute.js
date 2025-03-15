const express = require('express');
const router = express.Router();
const { getAllproduct, createProduct, upload } = require('../controller/productController');

// Define routes
router.get('/products', getAllproduct);
router.post('/products', upload.single('strMealThumb'), createProduct);;

module.exports = router;

