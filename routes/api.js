const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const Favorite = require("../models/Favorite");

const NASA_API_KEY = process.env.NASA_API_KEY || "DEMO_KEY";
const APOD_BASE = "https://api.nasa.gov/planetary/apod";

/* ── Fetch today's APOD ───────────────────────────────── */
router.get("/apod", async (req, res) => {
  try {
    const response = await fetch(`${APOD_BASE}?api_key=${NASA_API_KEY}`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from NASA API" });
  }
});

/* ── Fetch APOD by date ───────────────────────────────── */
router.get("/apod/:date", async (req, res) => {
  try {
    const response = await fetch(
      `${APOD_BASE}?api_key=${NASA_API_KEY}&date=${req.params.date}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from NASA API" });
  }
});

/* ── Fetch random APODs ───────────────────────────────── */
router.get("/apod-random/:count", async (req, res) => {
  try {
    const count = Math.min(parseInt(req.params.count) || 5, 10);
    const response = await fetch(
      `${APOD_BASE}?api_key=${NASA_API_KEY}&count=${count}`
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch from NASA API" });
  }
});

/* ── Save a favorite (form POST) ──────────────────────── */
router.post("/favorites", async (req, res) => {
  try {
    const { title, date, explanation, url, mediaType, note } = req.body;
    const existing = await Favorite.findOne({ date });
    if (existing) {
      return res.status(409).json({ error: "Already saved!" });
    }
    const fav = new Favorite({ title, date, explanation, url, mediaType, note: note || "" });
    await fav.save();
    res.status(201).json(fav);
  } catch (err) {
    res.status(500).json({ error: "Failed to save favorite" });
  }
});

/* ── Get all favorites ────────────────────────────────── */
router.get("/favorites", async (req, res) => {
  try {
    const favorites = await Favorite.find().sort({ savedAt: -1 });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
});

/* ── Delete a favorite ────────────────────────────────── */
router.delete("/favorites/:id", async (req, res) => {
  try {
    await Favorite.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete favorite" });
  }
});

module.exports = router;
