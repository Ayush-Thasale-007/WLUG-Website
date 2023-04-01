const express = require("express");
const eventController = require("./../controllers/eventController");
const authController = require("./../controllers/authController");

const router = express.Router();

router
  .route("/")
  .get(eventController.getAllEvents)
  .post(eventController.insertEvent);

router
  .route("/getSingle")
  .post(eventController.getSingleEvent);

module.exports = router;
