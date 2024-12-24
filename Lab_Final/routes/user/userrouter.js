const express = require("express");
let router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../../models/user_schema");

router.get("/user/login", (req, res) => {
    res.render("pages/Main_Site_pages/userLogin", { layout: false });
});

router.post("/user/register", async (req, res) => {
    const { username, email, password } = req.body;
    try {
        var existingUser = await User.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        var hashedPassword = await bcrypt.hash(password, 10);
        let newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.redirect("/user/login");

    } catch (error) {
        res.status(500).send("Error registering user!");
    }
});

router.post("/user/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).send("Invalid username or password!");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send("Invalid username or password!");
        }

        req.session.isUserLoggedIn = true;
        req.session.user = { username: user.username };
        res.redirect("/");
    } catch (error) {
        res.status(500).send("Error logging in user!");
    }
});

router.get("/user/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).send("Error logging out!");
        }
        res.redirect("/");
    });
});

module.exports = router; 