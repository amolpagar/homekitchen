const MongoClient = require("mongodb").MongoClient;
const { MONGODB_CONNECT_URL } = require("./constants");
const client = new MongoClient(MONGODB_CONNECT_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;
client.connect();
db = client.db("homekitchen_db");
const kitchens_collection = db.collection("kitchens");
const menus_collection = db.collection("menus");
const customer_collection = db.collection("customer");
const phone_collection = db.collection("phone");
const address_collection = db.collection("address");

function closeConnection() {
  client.close();
  console.log("MongoDB connection closed");
}

module.exports = {
  db,
  kitchens_collection,
  menus_collection,
  customer_collection,
  phone_collection,
  address_collection,
  closeConnection,
};
