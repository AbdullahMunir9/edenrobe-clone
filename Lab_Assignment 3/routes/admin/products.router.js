const express = require("express");
let router = express.Router();

let Product = require("../../models/products.models");
let Category = require("../../models/category.models");




router.get("/admin/categories",async (req,res)=>{
    let category = await Category.find();
    res.render("pages/Admin_Pages/category",{layout: "admin-layout.ejs", category});
})

router.get("/admin/categories/createCategory",async (req,res)=>{
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

router.get("/admin/categories/edit/:id", async (req,res)=>{
    let category = await Category.findById(req.params.id);
    return res.render("pages/Admin_Pages/Edit-category",{layout: "admin-layout.ejs",category});
})

router.post("/admin/categories/edit/:id", async (req,res)=>{
    let category = await Category.findById(req.params.id);
    category.category = req.body.category;
    category.description = req.body.description;
    category.price = req.body.price;
    category.src = req.body.src
    category.In_Stock = Boolean(req.body.In_Stock);
    await category.save();
    return res.redirect("/admin/categories");
})






router.get("/admin/products",async (req,res)=>{
    let products = await Product.find();
    res.render("pages/Admin_Pages/products",{layout: "admin-layout.ejs", products});
})

router.get("/admin/products/create",async (req,res)=>{
    let categories = await Category.find();
    res.render("pages/Admin_Pages/create",{layout: "admin-layout.ejs",categories});
})

router.get("/admin/products/edit/:id", async (req,res)=>{
    let product = await Product.findById(req.params.id);
    return res.render("pages/Admin_Pages/edit-form",{layout: "admin-layout.ejs",product});
})
router.post("/admin/products/edit/:id", async (req,res)=>{
    let product = await Product.findById(req.params.id);
    product.title = req.body.title;
    product.description = req.body.description;
    product.price = req.body.price;
    product.isFeatured = Boolean(req.body.isFeatured);
    await product.save();
    return res.redirect("/admin/products");
})

router.get("/admin/products/delete/:id", async (req,res)=>{
    await Product.findByIdAndDelete(req.params.id);
    return res.redirect("back");
})

router.post("/admin/products/create",async (req,res)=>{
    let newProduct = new Product(req.body);
    newProduct.isFeatured = Boolean(req.body.isFeatured);
    await newProduct.save();
    // return res.send(newProduct);
    return res.redirect("/admin/products");
})

router.get("/admin/dashboard",(req,res)=>{
    res.render("pages/Admin_Pages/dashboard",{layout: "admin-layout.ejs"});
})

module.exports = router;