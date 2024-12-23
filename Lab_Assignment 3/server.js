const express  = require("express");
let app = express();

// add a middleware to parse body data for form submission
app.use(express.urlencoded());

var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

app.use(express.static("public"));
app.set("view engine",'ejs');

let productsRouter = require("./routes/admin/products.router");
app.use(productsRouter);




const mongoose = require("mongoose");
let connectionString = "mongodb://127.0.0.1:27017/Edenrobe"; //since i have ipv4 version of mongodb
// let connectionString = "mongodb://localhost:27017/Edenrobe"; // use this when u have ipv6 version
mongoose.connect(connectionString)
.then(()=>{
    console.log(`Connected To:${connectionString}`)
})
.catch((err)=>{
    console.log("hello");
})

app.get("/",(req,res)=>{
    res.render("pages/Main_Site_pages/landingPage");
})

app.get("/women",async (req,res)=>{
    let Products = require("./models/products.models");
    let product = await Products.find();
    res.render("pages/Main_Site_pages/women",{ product });
})

app.listen(5000, ()=>{
    console.log("Server started at location : 5000");
});