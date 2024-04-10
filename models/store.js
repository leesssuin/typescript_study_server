const mongoose = require("mongoose");
const Category = require("./category");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  review: {
    type: Number,
    required: false
  },
  tip: {
    type: Number,
    required: true
  },
  order_options: [
    {
      type: Schema.Types.ObjectId,
      ref: Category
    }
  ]
});

module.exports = mongoose.model("StoreList", StoreSchema, "stores");
