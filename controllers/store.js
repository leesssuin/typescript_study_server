const createError = require("http-errors");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

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

exports.getStoreInfo = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!ObjectId.isValid(id)) {
      res.status(400).json({
        result: "error400",
        error: {
          message: "잘못된 ID 입니다."
        }
      });

      return;
    }

    const info = await storeService.getInfo(id);

    res.json({
      result: "success",
      store_info: info
    });
  } catch (err) {
    next(createError(500, "Invalid Error"));
  }
};
