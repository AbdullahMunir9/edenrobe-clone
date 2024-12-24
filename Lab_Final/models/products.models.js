const mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  description: String,
  price: Number,
  picture: String,
  S_Quantity: { type: Number, default: 0 },
  M_Quantity: { type: Number, default: 0 },
  L_Quantity: { type: Number, default: 0 },
  T_Quantity: Number,
  In_Stock: { type: Boolean, default: false },
  categoryId: String
});

let Product = mongoose.model("Product", productSchema);

module.exports = Product;