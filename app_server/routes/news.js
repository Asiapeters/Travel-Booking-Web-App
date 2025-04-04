var express = require("express");
var router = express.Router();
var controllerNews = require("../controllers/news");

/* GET about page. */
router.get("/", controllerNews.news);

module.exports = router;