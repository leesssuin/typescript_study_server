const createError = require("http-errors");
const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const { RESULT_MESSAGE, ERROR_MESSAGE } = require("../const/response");
const storeService = require("../services/store");

exports.getStoreList = async (req, res, next) => {
  try {
    const storeList = await storeService.getList();

    res.json({
      result: RESULT_MESSAGE.SUCCESS,
      store_list: storeList
    });
  } catch (err) {
    next(createError(500, ERROR_MESSAGE.INVALID_SERVER_ERROR));
  }
};

exports.getStoreInfo = async (req, res, next) => {
  const { id } = req.params;

  try {
    if (!ObjectId.isValid(id)) {
      res.status(400).json({
        result: RESULT_MESSAGE.FAIL,
        error: {
          message: ERROR_MESSAGE.VALIDATION_ERROR
        }
      });

      return;
    }

    const info = await storeService.getInfo(id);

    res.json({
      result: RESULT_MESSAGE.SUCCESS,
      store_info: info
    });
  } catch (err) {
    next(createError(500, ERROR_MESSAGE.INVALID_SERVER_ERROR));
  }
};

exports.getOptions = async (req, res, next) => {
  const { menuId } = req.params;

  try {
    if (!ObjectId.isValid(menuId)) {
      res.status(400).json({
        result: RESULT_MESSAGE.FAIL,
        error: {
          message: ERROR_MESSAGE.VALIDATION_ERROR
        }
      });

      return;
    }

    const menuInfo = await storeService.getMenuOptions(menuId);

    res.json({
      result: RESULT_MESSAGE.SUCCESS,
      menu_options: menuInfo
    });
  } catch (err) {
    next(createError(500, ERROR_MESSAGE.INVALID_SERVER_ERROR));
  }
};
