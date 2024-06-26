const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  category_name: {
    type: String,
    required: true
  },
  choice_count: {
    type: Number,
    required: true
  },
  options: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("Category", categorySchema, "category");
