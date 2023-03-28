var express = require('express');
var chef_router = express.Router();
const { kitchens_collection, menus_collection, closeConnection } = require('../db/mongoModule');
const { ObjectId } = require('mongodb');

chef_router.post("/kitchen", async (req, res) => {
    const { name, address, contact, schedule } = req.body;
    const newKitchen = { name, address, contact, schedule };
    kitchens_collection.insertOne(newKitchen)
        .then(function (data) {
            if (data) {
                return res.status(201).send(data);
            }
        })
        .catch(function (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        });
});

chef_router.put("/kitchen/:kitchen_id", async (req, res) => {
    const { name, address, contact, schedule } = req.body;
    const kitchenId = ObjectId(req.params.kitchen_id);
    const result = await kitchens_collection.findOneAndUpdate(
        { _id: kitchenId },
        { $set: { name, address, contact, schedule } },
        { returnOriginal: false }
    );
    res.json(result.value);
});

chef_router.get("/kitchen/:kitchen_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const result = await kitchens_collection.findOne({ _id: kitchenId });
    res.json(result);
});

chef_router.delete("/kitchen/:kitchen_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const result = await kitchens_collection.findOneAndDelete({ _id: kitchenId });
    res.json(result.value);
});

// Menu APIs
chef_router.post("/kitchen/:kitchen_id/menu", async (req, res) => {
    const { itemName, itemPhoto, calories, price, isAvailable, availableQuantity, description, spiceLevel } = req.body;
    const kitchenId = ObjectId(req.params.kitchen_id);
    const newMenu = { kitchenId, itemName, itemPhoto, calories, price, isAvailable, availableQuantity, description, spiceLevel };
    menus_collection.insertOne(newMenu).then(function (data) {
        if (data) {
            return res.status(201).send(data);
        }
    })
        .catch(function (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        });
});

chef_router.put("/kitchen/:kitchen_id/menu/:menu_id", async (req, res) => {
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

chef_router.get("/kitchen/:kitchen_id/menu/:menu_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const menuId = ObjectId(req.params.menu_id);
    const result = await menus_collection.findOne({ _id: menuId, kitchenId });
    res.json(result);
});

chef_router.delete("/kitchen/:kitchen_id/menu/:menu_id", async (req, res) => {
    const kitchenId = ObjectId(req.params.kitchen_id);
    const menuId = ObjectId(req.params.menu_id);
    menus_collection.findOneAndDelete({ _id: menuId, kitchenId })
        .then(function (data) {
            if (data) {
                return res.status(201).send(data);
            }
        })
        .catch(function (err) {
            console.log(err);
            return res.status(500).json({ message: err });
        });    
});

module.exports = chef_router;