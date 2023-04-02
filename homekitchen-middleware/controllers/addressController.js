const Customer = require("../models/customer");
const Address = require("../models/address");

const getAddress = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId).populate(
      "addresses"
    );
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    const address = customer.addresses.find(
      (addr) => addr.id === req.params.id
    );
    if (!address) return res.status(404).json({ message: "Address not found" });

    res.json(address);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createAddress = async (req, res) => {
  const customer = await Customer.findById(req.params.customerId);
  if (!customer) return res.status(404).json({ message: "Customer not found" });

  const address = new Address({
    customerId: customer._id,
    line1: req.body.line1,
    line2: req.body.line2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    type: req.body.type,
  });

  try {
    const newAddress = await address.save();

    customer.addresses.push(newAddress);
    await customer.save();

    res.status(201).json(newAddress);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateAddress = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId).populate(
      "addresses"
    );
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    const address = customer.addresses.find(
      (addr) => addr.id === req.params.id
    );
    if (!address) return res.status(404).json({ message: "Address not found" });

    address.line1 = req.body.line1;
    address.line2 = req.body.line2;
    address.city = req.body.city;
    address.state = req.body.state;
    address.zip = req.body.zip;
    address.type = req.body.type;

    await address.save();
    res.json(address);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteAddress = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.customerId).populate(
      "addresses"
    );
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    const addressIndex = customer.addresses.findIndex(
      (addr) => addr.id === req.params.id
    );
    if (addressIndex === -1)
      return res.status(404).json({ message: "Address not found" });

    customer.addresses.splice(addressIndex, 1);
    await Address.findByIdAndDelete(req.params.id);
    await customer.save();

    res.json({ message: "Address deleted" });
  } catch (err) {
    res.status(500).json({ message });
  }
};

module.exports = {
  getAddress,
  createAddress,
  updateAddress,
  deleteAddress,
};
