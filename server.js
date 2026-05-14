const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

/* ── Middleware ─────────────────────────────────────────── */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/* ── MongoDB ───────────────────────────────────────────── */
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

/* ── API Routes (express.Router) ───────────────────────── */
const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

/* ── Start ─────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`🚀 Space Explorer running at http://localhost:${PORT}`);
});
