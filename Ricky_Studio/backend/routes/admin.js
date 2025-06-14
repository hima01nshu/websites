const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Contact = require("../models/Contact");

// Use a consistent secret key (store in env file in real projects)
const JWT_SECRET = "your_super_secret_key";

// 🔐 Login route to authenticate admin and generate JWT token
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ username: admin.username }, JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token }); // ✅ Send token to frontend
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware to verify token
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });
    req.admin = decoded;
    next();
  });
}

// 🔐 Protected route for fetching messages
router.get("/messages", verifyToken, async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    console.error("Fetch messages error:", err);
    res.status(500).json({ message: "Failed to fetch messages." });
  }
});

module.exports = router;
