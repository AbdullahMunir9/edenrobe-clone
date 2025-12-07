const mongoose = require("mongoose");
let categorySchema = new mongoose.Schema({
  category: String,
  slug: String,
});

let category = mongoose.model("category", categorySchema);

module.exports = category;