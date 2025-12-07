const express = require("express");
let router = express.Router();
let session = require("express-session");

let Location = require("../../models/location.models")

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
        res.redirect("/admin/products")
    }
    else{
        res.render("pages/Admin_Pages/login", { layout: false });
    }
})


router.get("/admin/locator",isAuthenticated,async (req,res)=>{
    let location = await Location.find()
    res.render("pages/Admin_Pages/locator",{layout: "admin-layout.ejs",location});
})

router.get("/admin/locator/Outlet",isAuthenticated,(req,res)=>{
    res.render("pages/Admin_Pages/createOutlet",{layout: "admin-layout.ejs"});
})

router.post("/admin/locator/Outlet",isAuthenticated,async (req,res)=>{
    let location = new Location(req.body);
    await location.save();
    return res.redirect("/admin/locator");
})

router.get("/admin/locator/delete/:id", async (req,res)=>{
    await Location.findByIdAndDelete(req.params.id);
    return res.redirect("back");
})

router.get("/admin/locator/edit/:id",isAuthenticated, async (req,res)=>{
    let location = await Location.findById(req.params.id);
    return res.render("pages/Admin_Pages/editoutlet",{layout: "admin-layout.ejs",location});
})

router.post("/admin/locator/edit/:id",isAuthenticated, async (req,res)=>{
    let location = await Location.findById(req.params.id);
    location.latitude = req.body.latitude;
    location.longitude = req.body.longitude;
    location.name = req.body.name;
    location.address = req.body.address
    await location.save();
    return res.redirect("/admin/locator");
})


module.exports = router;