var express = require('express');
var chef_router = express.Router();
const { kitchens_collection, menus_collection, closeConnection } = require('../db/mongoModule');
const { ObjectId } = require('mongodb');

chef_router.post("/v1/chef/kitchen", async (req, res) => {
    const { name, address, contact, schedule } = req.body;
    const newKitchen = { name, address, contact, schedule };
    const result = await kitchens_collection.insertOne(newKitchen);
    res.json(result.ops[0]);
});

chef_router.put("/v1/chef/kitchen/:kitchen_id", async (req, res) => {
    const { name, address, contact, schedule } = req.body;
    const kitchenId = ObjectId(req.params.kitchen_id);
    const result = await kitchens_collection.findOneAndUpdate(
        { _id: kitchenId },
        { $set: { name, address, contact, schedule } },
        { returnOriginal: false }
    );
    res.json(result.value);
});

chef_router.get("/v1/chef/kitchen/:kitchen_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const result = await kitchens_collection.findOne({ _id: kitchenId });
    res.json(result);
});

chef_router.delete("/v1/chef/kitchen/:kitchen_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const result = await kitchens_collection.findOneAndDelete({ _id: kitchenId });
    res.json(result.value);
});

// Menu APIs
chef_router.post("/v1/chef/kitchen/:kitchen_id/menu", async (req, res) => {
    const { itemName, itemPhoto, calories, price, isAvailable, availableQuantity, description, spiceLevel } = req.body;
    const kitchenId = ObjectId(req.params.kitchen_id);
    const newMenu = { kitchenId, itemName, itemPhoto, calories, price, isAvailable, availableQuantity, description, spiceLevel };
    const result = await menus_collection.insertOne(newMenu);
    res.json(result.ops[0]);
});

chef_router.put("/v1/chef/kitchen/:kitchen_id/menu/:menu_id", async (req, res) => {
    const { itemName, itemPhoto, calories, price, isAvailable, availableQuantity, description, spiceLevel } = req.body;
    const kitchenId = ObjectId(req.params.kitchen_id);
    const menuId = ObjectId(req.params.menu_id);
    const result = await menus_collection.findOneAndUpdate(
        { _id: menuId, kitchenId },
        { $set: { itemName, itemPhoto, calories, price, isAvailable, availableQuantity, description, spiceLevel } },
        { returnOriginal: false }
    );
    res.json(result.value);
});

chef_router.get("/v1/chef/kitchen/:kitchen_id/menu/:menu_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const menuId = ObjectId(req.params.menu_id);
    const result = await menus_collection.findOne({ _id: menuId, kitchenId });
    res.json(result);
});

chef_router.delete("/v1/chef/kitchen/:kitchen_id/menu/:menu_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const menuId = ObjectId(req.params.menu_id);
    const result = await menus_collection.findOneAndDelete({ _id: menuId, kitchenId });
    res.json(result.value);
});

module.exports = chef_router;