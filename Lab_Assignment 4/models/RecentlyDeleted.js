const mongoose = require("mongoose");

let RecentlyDeleted = new mongoose.Schema({
  description: String,
  price: Number,
  picture: String,
  categoryId: String
});

let RD = mongoose.model("RecentlyDeleted", RecentlyDeleted);

module.exports = RD;