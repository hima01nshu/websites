const mongoose = require("mongoose");
const Admin = require("./models/Admin");

mongoose.connect("mongodb://127.0.0.1:27017/ricky_studio").then(async () => {
  const existing = await Admin.findOne({ username: "admin" });
  if (!existing) {
    await Admin.create({ username: "admin", password: "ricky123" });
    console.log("✅ Admin seeded.");
  } else {
    console.log("⚠️ Admin already exists.");
  }
  mongoose.disconnect();
});
