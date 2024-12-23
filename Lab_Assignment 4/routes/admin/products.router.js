const express = require("express");
let router = express.Router();
let multer  = require("multer")
let session = require("express-session");

let Product = require("../../models/products.models");
let Category = require("../../models/category.models");
let RecentlyDeleted = require("../../models/RecentlyDeleted");
const Order = require("../../models/Order.models");



router.use(
    session({
        secret: "your-secret-key", 
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false }

    })
);

function isAuthenticated(req, res, next) {
    if (req.session.isLoggedIn) {
        return next();
    }
    res.redirect("/admin/login");
}

router.get("/admin/login", (req, res) => {
    if(req.session.isLoggedIn){
        res.redirect("/admin/products");
    }
    else{
        res.render("pages/Admin_Pages/login", { layout: false });
    }
})




const storage = multer.diskStorage({
    destination: function(req , file , cb){
        cb(null,"./uploads")
    },
    filename: function(req , file , cb){
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({ storage: storage });



router.get("/admin/categories",isAuthenticated,async (req,res)=>{
    let category = await Category.find();
    res.render("pages/Admin_Pages/category",{layout: "admin-layout.ejs", category});
})

router.get("/admin/categories/createCategory",isAuthenticated,async (req,res)=>{
    res.render("pages/Admin_Pages/createCategory",{layout: "admin-layout.ejs"});
})

router.post("/admin/categories/createCategory",async (req,res)=>{
    let categoryProduct = new Category(req.body);
    categoryProduct.In_Stock = Boolean(req.body.In_Stock);
    await categoryProduct.save();
    return res.redirect("/admin/categories");
})

router.get("/admin/categories/delete/:id", async (req,res)=>{
    await Category.findByIdAndDelete(req.params.id);
    return res.redirect("back");
})

router.get("/admin/categories/edit/:id",isAuthenticated, async (req,res)=>{
    let category = await Category.findById(req.params.id);
    return res.render("pages/Admin_Pages/Edit-category",{layout: "admin-layout.ejs",category});
})

router.post("/admin/categories/edit/:id", async (req,res)=>{
    let category = await Category.findById(req.params.id);
    category.category = req.body.category;
    await category.save();
    return res.redirect("/admin/categories");
})






router.get("/admin/products/create",isAuthenticated,async (req,res)=>{
    let categories = await Category.find();
    res.render("pages/Admin_Pages/create",{layout: "admin-layout.ejs",categories});
})

router.get("/admin/products/edit/:id",isAuthenticated, async (req,res)=>{
    let categories = await Category.find();
    let product = await Product.findById(req.params.id);
    return res.render("pages/Admin_Pages/edit-form",{layout: "admin-layout.ejs",product,categories});
})

router.post("/admin/products/edit/:id", async (req,res)=>{
    let product = await Product.findById(req.params.id);
    product.description = req.body.description;
    product.price = req.body.price;
    product.S_Quantity = req.body.S_Quantity;
    product.M_Quantity = req.body.M_Quantity;
    product.L_Quantity = req.body.L_Quantity;
    product.T_Quantity = Number(req.body.S_Quantity) + Number(req.body.M_Quantity) + Number(req.body.L_Quantity);
    product.categoryId = req.body.categoryId;
    product.In_Stock = Boolean(req.body.In_Stock);
    await product.save();
    return res.redirect("/admin/products");
})

router.get("/admin/products/delete/:id", async (req,res)=>{
    let product = await Product.findById(req.params.id)
    let RD = new RecentlyDeleted();
    RD.description = product.description
    RD.price = product.price
    RD.picture = product.picture
    RD.categoryId = product.categoryId
    await RD.save();
    await Product.findByIdAndDelete(req.params.id);
    return res.redirect("back");
})

router.post("/admin/products/create",upload.single("file"),async (req,res)=>{
    let newProduct = new Product(req.body);
    if (req.file) newProduct.picture = req.file.filename;
    newProduct.In_Stock = Boolean(req.body.In_Stock);
    newProduct.T_Quantity = req.body.S_Quantity + req.body.M_Quantity + req.body.L_Quantity;
    await newProduct.save();
    // return res.send(newProduct);
    return res.redirect("/admin/products");
})

router.get("/admin/dashboard/:sortby?",isAuthenticated,async (req,res)=>{
    let sortby = req.params.sortby;
    let date = req.query.date;
    let filter = {};

    if (date) {
        filter.orderDate = date;
    }
    if(date){
        let Orders = await Order.find(filter);
        // let  Orders = await Order.find({orderDate: date});
        let RD = await RecentlyDeleted.find();
        let TotalOrders = await Order.countDocuments();
        let TotalDeleted = await RecentlyDeleted.countDocuments();
        res.render("pages/Admin_Pages/dashboard",{layout: "admin-layout.ejs",Orders,RD,TotalOrders,TotalDeleted});
    }
    else if((sortby == "dsc" || sortby == "asc") && (sortby!=="All")){
        let Orders = await Order.find();
        if (sortby == "dsc") {
            Orders = Orders.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
        } else if (sortby == "asc") {
            Orders = Orders.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
        }
        let RD = await RecentlyDeleted.find();
        let TotalOrders = await Order.countDocuments();
        let TotalDeleted = await RecentlyDeleted.countDocuments();
        res.render("pages/Admin_Pages/dashboard",{layout: "admin-layout.ejs",Orders,RD,TotalOrders,TotalDeleted});
    }
    else{
        let Orders = await Order.find();
        let RD = await RecentlyDeleted.find();
        let TotalOrders = await Order.countDocuments();
        let TotalDeleted = await RecentlyDeleted.countDocuments();
        res.render("pages/Admin_Pages/dashboard",{layout: "admin-layout.ejs",Orders,RD,TotalOrders,TotalDeleted});
    }    
})

// Pagination

router.get("/admin/products/:page?/:sortby?",isAuthenticated,async (req, res) => {
    let sortby = req.params.sortby
    if ((sortby == "price" || sortby == "Quantity") && (sortby!=="All")){
        let page = req.params.page ? Number(req.params.page) : 1;
        let pageSize = 8;
        let Productshown = (page - 1) * pageSize
        let products = await Product.find().limit(pageSize).skip(Productshown);
        if(sortby === "price"){
            products = products.sort((a, b) => a.price - b.price);
        }
        else{
            products = products.sort((a, b) => a.T_Quantity - b.T_Quantity);
        }
        let totalRecords = await Product.countDocuments();
        let totalPages = Math.ceil(totalRecords / pageSize);
        res.render("pages/Admin_Pages/products", {layout: "admin-layout.ejs",products,page,totalRecords,totalPages,Productshown,pageSize});
    }
    else{
        let page = req.params.page ? Number(req.params.page) : 1;
        let pageSize = 8;
        let Productshown = (page - 1) * pageSize
        let products = await Product.find().limit(pageSize).skip(Productshown);
        let totalRecords = await Product.countDocuments();
        let totalPages = Math.ceil(totalRecords / pageSize);
        res.render("pages/Admin_Pages/products", {layout: "admin-layout.ejs",products,page,totalRecords,totalPages,Productshown,pageSize});
    } 
});

// Original
// router.get("/admin/products",async (req,res)=>{
//     let products = await Product.find();
//     res.render("pages/Admin_Pages/products",{layout: "admin-layout.ejs", products});
// })

module.exports = router;