const StoreList = require("../models/store");

exports.getList = async () => {
  const list = await StoreList.find().exec();

  return list;
};
