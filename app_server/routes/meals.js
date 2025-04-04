var express = require("express");
var router = express.Router();
var contollerMeals = require("../controllers/meals");

/* GET meals page. */
router.get("/", contollerMeals.meals);

module.exports = router;
