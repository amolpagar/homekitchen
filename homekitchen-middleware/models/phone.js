const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
  {
    areaCode: { type: String, required: true },
    number: { type: String, required: true },
    phoneType: { type: String, required: true },
  },
  { versionKey: false }
);

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;
