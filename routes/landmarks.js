var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("landmarks", { title: "Search Results Landmarks" });
});

module.exports = router;
