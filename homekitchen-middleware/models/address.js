const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
    required: true,
  },
  line1: { type: String, required: true },
  line2: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  type: { type: String, enum: ["home", "work", "other"], required: true },
});

const Address = mongoose.model("Address", addressSchema);

module.exports = Address;
