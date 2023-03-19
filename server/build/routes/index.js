"use strict";
const router = require("express").Router();
const controllers = require("../controllers");
// Create or Update an item
router.post("/item/create", controllers.createUpdateItem);
// Delete an item
router.delete("/:col/:key", controllers.deleteItem);
// Get a single item
router.get("/:col/:key", controllers.getItem);
// Get a full listing
router.get("/:col", controllers.getAllItems);
module.exports = router;
