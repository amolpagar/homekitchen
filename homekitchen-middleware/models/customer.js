const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
  {
    areaCode: { type: String, required: true },
    number: { type: String, required: true },
  },
  { _id: false, id: false }
);

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  email: { type: String, required: true },
  phone: { type: phoneSchema, required: true },
  addresses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Address" }],
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
