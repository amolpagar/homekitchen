const express = require("express");
const router = express.Router({ mergeParams: true });

const addressController = require("../controllers/addressController");

router.get("/:id", addressController.getAddress);
router.post("/", addressController.createAddress);
router.patch("/:id", addressController.updateAddress);
router.delete("/:id", addressController.deleteAddress);

module.exports = router;
