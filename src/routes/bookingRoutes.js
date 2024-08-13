const express = require("express");
const bookingController = require("../controllers/bookingController");
const bookingRoute = express.Router();

bookingRoute.post("/", bookingController);

module.exports = bookingRoute;
