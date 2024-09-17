const multer = require("multer");

const storage = multer.memoryStorage();
const multiUpload = multer({ storage: storage }).single('file');

module.exports = multiUpload;
