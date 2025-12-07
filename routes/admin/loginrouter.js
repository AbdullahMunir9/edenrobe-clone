const express = require("express");
let router = express.Router();
const session = require("express-session");
const bcrypt = require("bcrypt");
const Admin = require("../../models/admin_schema");

let newAdmin = null;

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    try {
        var existingAdmin = await Admin.findOne({ username });
        if (existingAdmin) {
            return res.status(400).send("Admin already exists!");
        }

        var hashedPassword = await bcrypt.hash(password, 10);

        newAdmin = new Admin({ username, password: hashedPassword });

        await newAdmin.save();
        res.redirect("/admin/login");

    } catch (error) {
        res.status(500).send("Error registering admin!");
    }
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).send("Invalid username or password!");
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return res.status(400).send("Invalid username or password!");
        }

        req.session.isLoggedIn = true;
        req.session.admin = { username: admin.username };
        res.redirect("admin/products");
    } catch (error) {
        res.status(500).send("Error logging in admin!");
    }
});

// Not handled right now
router.get("/admin/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send("Error logging out!");
        }
        res.redirect("/");
    });
});

module.exports = router;