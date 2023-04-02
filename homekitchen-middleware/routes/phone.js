const express = require("express");
const router = express.Router({ mergeParams: true });
const phoneController = require("../controllers/phoneController");

router.get("/", phoneController.getAllPhonesForCustomer);
router.get("/:id", phoneController.getPhoneById);
router.post("/", phoneController.createPhoneForCustomer);
router.patch("/:id", phoneController.updatePhoneById);
router.delete("/:id", phoneController.deletePhoneById);

module.exports = router;
