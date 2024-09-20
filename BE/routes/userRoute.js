let express = require("express");
const {
  RegisterUser,
  loginUser, deleteFile, getLanding, landingData, textCheck, updateSlot,
  newText,
  mainAdmin,
  getImage, updateText, uploadMedia,
  getMedia
} = require("../controllers/userController");
const { authorizedRoles } = require("../middlewares/auth");

const multer = require('multer');

const singleUpload = require('../middlewares/multer.js');
const multiUpload = require("../middlewares/multerMulti.js");
const upload = multer();
let router = express.Router();

router.route("/register").post(RegisterUser);
router.route("/signin").post(singleUpload, loginUser);
router.route("/admin").post(singleUpload, mainAdmin);
router.route("/admin/delete/:id").delete(deleteFile);
router.route("/admin/landing/getLanding").post(getLanding);
router.route("/admin/landing").post(landingData);
router.route("/admin/textcheck").post(singleUpload, textCheck);
router.route("/admin/updateFile").put(singleUpload, updateSlot);
router.route("/text").post(singleUpload, newText);
router.route("/getdata/image").post(getImage);
router.route("/admin/updateText").put(updateText);
router.route("/admin/uploadMedia").post(multiUpload, uploadMedia);
router.route("/admin/getMedia").get(getMedia);


module.exports = router;
