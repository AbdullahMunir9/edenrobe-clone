const mongoose = require("mongoose");
let locationSchema = new mongoose.Schema({
    latitude: Number,
    longitude: Number,
    name: String,
    address: String
});
let Location = mongoose.model("Location", locationSchema);
module.exports = Location;