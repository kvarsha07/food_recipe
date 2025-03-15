const multer = require('multer');
const path = require('path');
const Products = require('../model/product');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));          //Extracts the file extension
  }
});

// Create Multer Upload Middleware
const upload = multer({ storage: storage });

// get data 
// const getAllproduct = async (req, res) => {
//   const products = await Products.find();
//   res.send(products);
// };
// const getAllproduct = async (req, res) => {
//   try {
//     const { search } = req.query;
//     const query = search ? { strMeal: new RegExp(search, "i") } : {};

//     const products = await Products.find(query);

//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

const getAllproduct = async (req, res) => {
  try {
    const { search } = req.query; // Extract search query from request

    let query = {}; // Default empty query

    if (search) {
      query.strMeal = { $regex: search, $options: "i" }; // Case-insensitive search
    }

    const products = await Products.find(query);

    // Update image URLs
    

    res.json(updatedProducts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const { strMeal, strInstructions } = req.body;
    const strMealThumb = req.file ? req.file.path : null;
   

    if (!strMeal || !strInstructions || !strMealThumb) {
      return res.status(400).json({ msg: "All fields are required!" });
    }

    const newProduct = new Products({ strMeal, strMealThumb, strInstructions });

    await newProduct.save();
    res.status(201).json({ msg: "Product created successfully", newProduct });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export functions **including upload**
module.exports = { getAllproduct, createProduct, upload };


















// const fs = require('fs');

// const uploadDir = 'uploads';

// // Ensure the 'uploads' folder exists
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }