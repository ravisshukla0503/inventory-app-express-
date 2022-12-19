/** @format */

const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  item: String,
  category: String,
  price: String,
  description: String,
});

module.exports = mongoose.model("items", itemSchema);

