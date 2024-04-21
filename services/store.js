const StoreList = require("../models/store");
const Menu = require("../models/menu");

exports.getList = async () => {
  const list = await StoreList.find().exec();

  return list;
};

exports.getInfo = async (id) => {
  const info = await StoreList.findById(id).populate("menu");

  return info;
};

exports.getMenuOptions = async (menuId) => {
  const menuInfo = await Menu.findById(menuId).populate("order_options");

  return menuInfo;
};
