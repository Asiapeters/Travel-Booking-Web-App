const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// define route for our trips endpoint
router.route("/trips").get(tripsController.tripslist);

// GET Method routes tripsFindByCode - requires parameter
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);

module.exports = router;
