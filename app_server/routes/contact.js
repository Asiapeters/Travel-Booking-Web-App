var express = require("express");
var router = express.Router();
var controllerContact = require("../controllers/contact");

/* GET contact page. */
router.get("/", controllerContact.contact);

module.exports = router;
