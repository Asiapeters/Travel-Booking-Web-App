var express = require("express");
var router = express.Router();
var controllerAbout = require("../controllers/about");

/* GET about page. */
router.get("/", controllerAbout.about);

module.exports = router;
