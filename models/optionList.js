const mongoose = require("mongoose");
const Category = require("./category");

const Schema = mongoose.Schema;

const OptionListSchema = new Schema({
  option_list: [Category]
});

module.exports = mongoose.model("OptionList", OptionListSchema);
