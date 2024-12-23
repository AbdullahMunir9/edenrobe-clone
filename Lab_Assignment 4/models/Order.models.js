const mongoose = require("mongoose");
let OrderSchema = new mongoose.Schema({
    total: Number,
    UserName: String,
    EmailAddress: String,
    address: String,
    city: String,
    orderDate: String,
    products: [
        {
            description: String,
            price: Number,
            size: String,
            quantity: Number,
        },
    ],
});

let Order = mongoose.model("Order", OrderSchema);
module.exports = Order;