const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ricky_studio");
mongoose.connection.on("connected", () => console.log("✅ MongoDB connected"));

// Routes
const adminRoutes = require("./routes/admin");
app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
