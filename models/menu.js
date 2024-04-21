const mongoose = require("mongoose");
const Category = require("./category");

const Schema = mongoose.Schema;

const MenuSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  image: {
    type: String,
    required: false
  },
  order_options: [
    {
      type: Schema.Types.ObjectId,
      ref: Category
    }
  ]
});

module.exports = mongoose.model("Menu", MenuSchema, "menu");
