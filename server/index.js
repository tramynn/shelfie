require("dotenv").config();
const express = require("express");
const massive = require("massive");
const app = express();
const inventoryController = require("./controllers/inventoryController");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
    console.log("Database is connected");
  })
  .catch(err => console.log(err));

app.use(express.json());

// add inventory
app.post("/api/inventory", inventoryController.addProduct);
// retrieve all products
app.get("/api/inventory", inventoryController.getInventory);
// edit product
app.put("/api/products/:id", inventoryController.editProduct);
// delete product
app.delete("/api/products/:id", inventoryController.deleteProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on ${SERVER_PORT}`);
});
