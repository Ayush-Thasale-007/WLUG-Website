const express = require("express");
const router = express.Router();
const authController = require("./../controllers/authController");
const clubServiceController = require("./../controllers/clubServiceController");

router.post("/insertCS", clubServiceController.insertCS);
router.get("/getAllCS", clubServiceController.getAllCS);
router.post("/getSingle",clubServiceController.getSingle);

module.exports = router;
