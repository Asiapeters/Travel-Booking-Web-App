const passport = require("passport");
const mongoose = require("mongoose");
const User = require("../models/user");

const register = async (req, res) => {
    try {
        const user = new User({
            email: req.body.email,
            name: req.body.name
        });

        user.setPassword(req.body.password); // Hashes password before saving

        await user.save();

        const token = user.generateJwt(); // Generate JWT after saving
        res.status(200).json({ token });

    } catch (err) {
        res.status(400).json({ error: err.message });
    }

};
const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "All fields required" });
    }
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            console.error("Error during authentication:", err);
            return res.status(404).json(err);
        }
        if (user) {
            const token = user.generateJwt();
            res.status(200).json({ token });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};
module.exports = { register, login };
