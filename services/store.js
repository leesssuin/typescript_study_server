const StoreList = require("../models/store");

exports.getList = async () => {
  const list = await StoreList.find().exec();

  return list;
};

exports.getInfo = async (id) => {
  const info = await StoreList.findById(id).populate("menu");

  return info;
};
