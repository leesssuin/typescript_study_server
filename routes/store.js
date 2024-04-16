const express = require("express");
const router = express.Router();

const storeController = require("../controllers/store");

router.get("/", storeController.getStoreList);
router.get("/:id", storeController.getStoreInfo);
router.get("/:id/:menuId", storeController.getOptions);

module.exports = router;
