const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// define route for our trips endpoint
router
  .route("/trips")
  .get(tripsController.tripslist)
  .post(tripsController.tripsAddTrip);

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripUpdateTrip - requires parameter
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip);

module.exports = router;