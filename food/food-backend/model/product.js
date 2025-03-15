const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  strMeal: { type: String, required: true },
  strMealThumb: { type: String, required: true },
  strInstructions: { type: String, required: true },
}, { collection: "Products" }); // ✅ Explicitly set collection name

module.exports = mongoose.model("Products", productSchema);
