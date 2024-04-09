const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const OptionsSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  }
});
module.exports = mongoose.model("Options", OptionsSchema);
