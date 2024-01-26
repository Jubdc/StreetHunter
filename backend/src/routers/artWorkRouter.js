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
router.get("/:id", read);

router.post("/", storage, formValidation, add);

router.post("/", add);
router.put("/:id/validate", validateArtwork);
router.delete("/:id", remove);
router.put("/:id", edit, validateArtwork);

module.exports = router;
