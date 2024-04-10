const createError = require("http-errors");

const storeService = require("../services/store");

exports.getStoreList = async (req, res, next) => {
  try {
    const storeList = await storeService.getList();

    res.json({
      result: "success",
      store_list: storeList
    });
  } catch (err) {
    next(createError(500, "Invalid Error"));
  }
};
