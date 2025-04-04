var express = require("express");
var router = express.Router();
const controllerTravel = require("../controllers/travel");

/* GET travel page. */
router.get("/", controllerTravel.travel);

module.exports = router;
