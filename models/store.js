const mongoose = require("mongoose");
const Menu = require("./menu");

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
  menu: [
    {
      type: Schema.Types.ObjectId,
      ref: Menu
    }
  ]
});

module.exports = mongoose.model("StoreList", StoreSchema, "stores");
