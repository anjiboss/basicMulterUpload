const router = require("express").Router();
const path = require("path");

const multer = require("multer");
const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images/avatar");
  },
  filename: (req, file, cb) => {
    const nameArray = file.originalname.split(".");
    const fileName = "avatar." + nameArray[nameArray.length - 1];
    cb(null, Date.now() + "-" + fileName);
  },
});
const upload = multer({ storage: storageEngine });

router.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.send("Uploaded");
});

router.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../", "images", "avatar", "1617296374627-avatar.png")
  );
});

module.exports = router;
