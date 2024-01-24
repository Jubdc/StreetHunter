const express = require("express");

const router = express.Router();

const {
  browse,
  browseValidated,
  read,
  edit,
  add,
  remove,
} = require("../controllers/artWorkControllers");
const storage = require("../middlewares/uploadImageArtwork");
const formValidation = require("../middlewares/artworkFormValidator");

router.get("/", browse);
router.get("/user", browseValidated);

router.post("/", storage, formValidation, add);

router.get("/:id", read);
router.put("/:id", edit);
router.delete("/:id", remove);

module.exports = router;
