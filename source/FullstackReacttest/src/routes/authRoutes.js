const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

const router = express.Router();

// Signup Route
router.post("/signup", [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        user = new User({ name, email, password: hashedPassword });

        await user.save();

        // Generate JWT
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, "mySecretKey", { expiresIn: "1h" });

        res.json({ token });

    } catch (err) {
        res.status(500).send("Server Error");
    }
});

module.exports = router;



// Login Route
router.post("/login", [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        // Generate JWT
        const payload = { user: { id: user.id } };
        const token = jwt.sign(payload, "mySecretKey", { expiresIn: "1h" });

        res.json({ token });

    } catch (err) {
        res.status(500).send("Server Error");
    }
});


const auth = require("../auth");

router.get("/me", auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (err) {
        res.status(500).send("Server Error");
    }
});
