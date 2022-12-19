/** @format */

const express = require("express");
const router = express.Router();
const routesControllers = require("../controllers/routesControllers");

router.get("/add", routesControllers.renderAddItems);

router.get("/", routesControllers.renderHomePage);

router.get("/item", routesControllers.readItems);

router.post("/add", routesControllers.addItems);

router.get("/search/:key", routesControllers.searchItem);

router.put("/update/:id", routesControllers.updateItem);

module.exports = router;

