const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Contact = require("./models/Contact");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/ricky_studio", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB connected successfully.");
});
mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// Contact Form Route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message received!" });
  } catch (error) {
    res.status(500).json({ message: "Server error." });
  }
});

// Optional fallback route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/contact.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
