const Customer = require("../models/customer");
const Phone = require("../models/phone");

const getAllPhonesForCustomer = async (req, res) => {
  try {
    const phones = await Phone.find({ customerId: req.params.customerId });
    res.json(phones);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getPhoneById = async (req, res) => {
  res.json(res.phone);
};

const createPhoneForCustomer = async (req, res) => {
  const phone = new Phone({
    areaCode: req.body.areaCode,
    number: req.body.number,
    customerId: req.params.customerId,
  });

  try {
    const newPhone = await phone.save();
    // Update the customer's phone number
    const customer = await Customer.findById(req.params.customerId);
    customer.phone = newPhone;
    await customer.save();
    res.status(201).json(newPhone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updatePhoneById = async (req, res) => {
  if (req.body.areaCode != null) {
    res.phone.areaCode = req.body.areaCode;
  }
  if (req.body.number != null) {
    res.phone.number = req.body.number;
  }

  try {
    const updatedPhone = await res.phone.save();
    res.json(updatedPhone);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deletePhoneById = async (req, res) => {
  try {
    // Update the customer's phone number
    const customer = await Customer.findById(res.phone.customerId);
    customer.phone = null;
    await customer.save();
    // Delete the phone
    await res.phone.remove();
    res.json({ message: "Phone deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllPhonesForCustomer,
  getPhoneById,
  createPhoneForCustomer,
  updatePhoneById,
  deletePhoneById,
};
