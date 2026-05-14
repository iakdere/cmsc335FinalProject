const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  explanation: { type: String, required: true },
  url: { type: String, required: true },
  mediaType: { type: String, default: "image" },
  savedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Favorite", favoriteSchema, "APOD-Favorites");
