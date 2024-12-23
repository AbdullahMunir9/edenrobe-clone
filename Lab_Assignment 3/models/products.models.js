// We make a seperate file for each collection in our mongodb
const mongoose = require("mongoose");
// make a schema
let productSchema = new mongoose.Schema({
  description: String,
  price: Number,
  src: String,
  isFeatured: { type: Boolean, default: false },
  categoryId: String
});
//make a model
let Product = mongoose.model("Product", productSchema);
//export that model
module.exports = Product;