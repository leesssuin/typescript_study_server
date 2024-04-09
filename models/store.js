const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  store_name: {
    type: String,
    required: true
  }
});

const StoreListSchema = new Schema({
  store_list: [StoreSchema]
});

module.exports = mongoose.model("StoreList", StoreListSchema, "stores");
