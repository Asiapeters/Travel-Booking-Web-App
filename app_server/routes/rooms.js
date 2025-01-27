var express = require("express");
var router = express.Router();
var controllerRooms = require("../controllers/rooms");

/* GET room page. */
router.get("/", controllerRooms.rooms);

module.exports = router;
