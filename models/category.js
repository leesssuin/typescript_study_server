const mongoose = require("mongoose");
const Options = require("./options");

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
  options: [Options]
});

module.exports = mongoose.model("Category", categorySchema);