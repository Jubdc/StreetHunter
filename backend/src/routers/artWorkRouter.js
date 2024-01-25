const express = require("express");

const router = express.Router();

const {
  browse,
  browseValidated,
  browseNotValidated,
  read,
  edit,
  add,
  remove,
  validateArtwork,
} = require("../controllers/artWorkControllers");
const storage = require("../middlewares/uploadImageArtwork");
const formValidation = require("../middlewares/artworkFormValidator");
// const isAdmin = require("../middlewares/isAdmin");

router.get("/user", browseValidated);

router.get("/", browse);
router.get("/notvalidated", browseNotValidated);

router.post("/", storage, formValidation, add);

router.get("/:id", read);
router.put("/:id", edit, validateArtwork);
router.post("/", add);
router.delete("/:id", remove);
router.put("/:id/validate", validateArtwork);

module.exports = router;
