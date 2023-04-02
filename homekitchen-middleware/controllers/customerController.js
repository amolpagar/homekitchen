const Customer = require("../models/customer");
const Address = require("../models/address");

const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find().populate("addresses");
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate(
      "addresses"
    );
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createCustomer = async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    dob: req.body.dob,
    email: req.body.email,
    phone: {
      areaCode: req.body.phone.areaCode,
      number: req.body.phone.number,
      phoneType: req.body.phone.phoneType,
    },
    addresses: [],
  });

  const address = new Address({
    customerId: customer._id,
    line1: req.body.address.line1,
    line2: req.body.address.line2,
    city: req.body.address.city,
    state: req.body.address.state,
    zip: req.body.address.zip,
    type: req.body.address.type,
  });

  try {
    const newAddress = await address.save();

    customer.addresses.push(newAddress);
    const newCustomer = await customer.save();

    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id).populate(
      "addresses"
    );
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    customer.name = req.body.name;
    customer.dob = req.body.dob;
    customer.email = req.body.email;
    customer.phone = req.body.phone;

    const updatedCustomer = await customer.save();
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (!customer)
      return res.status(404).json({ message: "Customer not found" });

    await Address.deleteMany({ customerId: customer._id });
    await customer.remove();

    res.json({ message: "Customer deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getCustomers,
  getCustomer,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
