let express = require("express");
const multer = require('multer');

const upload = multer();
const { authorizedRoles } = require("../middlewares/auth");
const {
  getData,
  rollCount, getSlotData, Slug
} = require("../controllers/getDataController");
const singleUpload = require("../middlewares/multer");

let router = express.Router();

router.route("/getdata").post(getData);
router.route("/rollCount").post(rollCount, upload.none());
router.route("/getSlotData").post(getSlotData);
router.route("/slug").post(singleUpload, Slug);

module.exports = router;
