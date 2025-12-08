require('dotenv').config();
const URI = process.env.MONGO_URI;
const session_secret = process.env.Session_SECRET;
const API_KEY = process.env.API_KEY;
const port = process.env.Port;

const express  = require("express");
let app = express();

const cookieParser = require("cookie-parser");
const session = require("express-session");

app.use(cookieParser());
app.use(session({ secret: session_secret }));

// Make session data available to all views
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

app.use(express.json());

app.use(express.urlencoded());

var expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

app.use(express.static("public"));
app.use(express.static("uploads"));


app.set("view engine",'ejs');

let productsRouter = require("./routes/admin/products.router");
app.use(productsRouter);

let locatorrouter = require("./routes/admin/location.router");
app.use(locatorrouter);


let adminroutes = require("./routes/admin/loginrouter");
app.use(adminroutes);

let userRouter = require("./routes/user/userrouter");
app.use(userRouter);

let Products = require("./models/products.models");
let Order = require("./models/Order.models");

const mongoose = require("mongoose");
let connectionString = URI; //since i have ipv4 version of mongodb
// let connectionString = "mongodb://localhost:27017/Edenrobe"; // use this when u have ipv6 version
mongoose.connect(connectionString)
.then(()=>{
    console.log(`Connected To:${connectionString}`)
})
.catch((err)=>{
    console.log("hello");
})

app.get("/api/removeitem/:id",(req,res)=>{
    let cart = req.cookies.cart;
    let id = req.params.id;

    for(let i=0; i<=cart.length;i++){
        if(id == cart[i]){
            delete cart[i];
        }
    }
    res.cookie("cart", cart);
    res.redirect("/cart");
})

app.post("/remove-from-wishlist/:id",(req,res)=>{
    let wishlist = req.cookies.wishlist;
    let id = req.params.id;

    for(let i=0; i<=wishlist.length;i++){
        if(id == wishlist[i]){
            delete wishlist[i];
        }
    }
    res.cookie("wishlist", wishlist);
    res.redirect("/wishlist");
})

app.get("/add-to-cart/:category/:id", async (req, res) => {
    let products = await Products.findById(req.params.id)
    let check = Boolean(products.In_Stock)
    let category = req.params.category
    if (!check) {
        return res.redirect(`/${category}?check=${check}`);
    }    
    check = true;
    let cart = req.cookies.cart;
    cart = cart ? cart : [];
    cart.push(req.params.id);
    res.cookie("cart", cart);
    res.redirect("/"+category);
});

app.get("/add-to-wishlist/:category/:id", async (req, res) => {
    if (!req.session.isUserLoggedIn) {
        return res.redirect('/user/login');
    }

    let products = await Products.findById(req.params.id)
    let check = Boolean(products.In_Stock)
    let category = req.params.category
    if (!check) {
        return res.redirect(`/${category}?check=${check}`);
    }    
    check = true;
    let wishlist = req.cookies.wishlist;
    wishlist = wishlist ? wishlist : [];
    wishlist.push(req.params.id);
    res.cookie("wishlist", wishlist);
    res.redirect("/"+category);
});

// Authentication middleware for wishlist
function checkUserAuth(req, res, next) {
    if ((req.path.startsWith('/add-to-wishlist') || req.path === '/wishlist') && !req.session.isUserLoggedIn) {
        return res.redirect('/user/login');
    }
    next();
}

app.use(checkUserAuth);

app.get("/wishlist", async (req, res) => {
    if (!req.session.isUserLoggedIn) {
        return res.redirect('/user/login');
    }
    let wishlist = req.cookies.wishlist;
    wishlist = wishlist ? wishlist : [];
    let wishlistItems = await Products.find({ _id: { $in: wishlist } });
    
    if (wishlistItems && wishlistItems.length > 0) {
        return res.render("pages/Main_Site_pages/wishlist", { layout: false, wishlistItems });
    } else {
        return res.render("pages/Main_Site_pages/emptywishlist", { layout: false });
    }
});

app.get("/cart", async (req, res) => {
    let cart = req.cookies.cart;
    cart = cart ? cart : [];
    let products = await Products.find({ _id: { $in: cart } });
    
    if (products && products.length > 0) {
        return res.render("pages/Main_Site_pages/cart", { layout: false, products });
    } else {
        return res.render("pages/Main_Site_pages/emptycart", { layout: false });
    }
});

app.post("/cart", async (req, res) => {
    try {
        let cart = req.cookies.cart;
        if (!cart || cart.length === 0) {
            return res.status(400).send("Cart is empty.");
        }
        let products = await Products.find({ _id: { $in: cart } });
        
        if (!products || products.length === 0) {
            return res.status(400).send("No valid products found in cart.");
        }


        let orderProducts = products.map((product, index) => {
            return {
                description: product.description,
                price: product.price,
                size: req.body[`size_${index}`],
                quantity: parseInt(req.body[`Quantity_${index}`])
            };
        });

        products.map(async (product, index) => {
            if(req.body[`size_${index}`] == 'Small'){
                product.S_Quantity = product.S_Quantity - req.body[`Quantity_${index}`]
                product.T_Quantity = product.S_Quantity + product.M_Quantity + product.L_Quantity
                await product.save()
            }
            else if(req.body[`size_${index}`] == 'Medium'){
                product.M_Quantity = product.M_Quantity - req.body[`Quantity_${index}`]
                product.T_Quantity = product.S_Quantity + product.M_Quantity + product.L_Quantity
                await product.save()
            }
            else if(req.body[`size_${index}`] == 'Large'){
                product.L_Quantity = product.L_Quantity - req.body[`Quantity_${index}`]
                product.T_Quantity = product.S_Quantity + product.M_Quantity + product.L_Quantity
                await product.save()
            }
        })

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
        
        let order = new Order({
            products: orderProducts,
            total: parseFloat(req.body.total),
            UserName: req.body.UserName,
            city: req.body.city,
            address: req.body.address,
            EmailAddress: req.body.EmailAddress,
            orderDate: "2024-12-24",
        });

        await order.save();

        res.clearCookie("cart");
        
        res.redirect("/")

    } catch (err) {
        console.error("Error processing order:", err);
        res.status(500).json({
            success: false,
            message: "An error occurred while placing the order",
            error: err.message
        });
    }
});


app.get("/",(req,res)=>{
    res.render("pages/Main_Site_pages/landingPage");
})

app.get("/locate",async (req,res)=>{
    let Location = require("./models/location.models");
    let outlets = await Location.find()
    res.render("pages/Main_Site_pages/location",{ outlets,API_KEY });
})


app.get("/women/:page?",async (req,res)=>{
    res.render("pages/Main_Site_pages/women");
});


app.get("/men/:page?",async (req,res)=>{
    res.render("pages/Main_Site_pages/men");
});
app.get("/fragrances/:page?",async (req,res)=>{
    let check = true;
    res.render("pages/Main_Site_pages/fragrances",{check});
});
app.get("/girls/:page?",async (req,res)=>{
    res.render("pages/Main_Site_pages/girls");
});
app.get("/boys/:page?",async (req,res)=>{
    res.render("pages/Main_Site_pages/boys");
});

app.get('/api/products', async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;
    const category = req.query.category;
    const startIndex = (page - 1) * limit;
    const products = await Products.find({ categoryId: category }).skip(startIndex).limit(limit);
    const totalRecords = await Products.countDocuments({ categoryId: category });
    const totalPages = Math.ceil(totalRecords / limit);

    res.json({
        products,
        totalRecords,
        totalPages,
        currentPage: page
    });
});



// Without API Pagination
// app.get("/women/:page?",async (req,res)=>{
//     let Products = require("./models/products.models");
//     let page = req.params.page ? Number(req.params.page) : 1;
//     let pageSize = 8;
//     let product = await Products.find({ categoryId: "Women" }).limit(pageSize).skip((page - 1) * pageSize);
//     let totalRecords = await Products.countDocuments({ categoryId: "Women" });
//     let totalPages = Math.ceil(totalRecords / pageSize);
//     res.render("pages/Main_Site_pages/women",{ product,page,totalPages,totalRecords });
// })


app.listen(port, ()=>{
    console.log("Server started at location : 5000");
});
