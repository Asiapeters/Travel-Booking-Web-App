const express = require("express");
const router = express.Router();
const { expressjwt: jwt } = require('express-jwt');
const auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: "payload",
    algorithms: ['HS256']
});

const authController = require("../controllers/authentication");
const tripsController = require("../controllers/trips");

router.route("/login").post(authController.login);

router.route("/register").post(authController.register);

// define route for our trips endpoint
router
    .route("/trips")
    .get(tripsController.tripslist)
    .post(auth, tripsController.tripsAddTrip);

// GET Method routes tripsFindByCode - requires parameter
// PUT Method routes tripUpdateTrip - requires parameter
router
    .route("/trips/:tripCode")
    .get(tripsController.tripsFindByCode)
    .put(auth, tripsController.tripsUpdateTrip);

module.exports = router;
