var express = require("express");

var router = express.Router();

var hotdog = require("../models/hotdog_mod.js");

router.get("/", function(req, res) {
  hotdog.all(function(data) {
    var hbsObject = {
      hotdogs: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/hotdogs", function(req, res) {
  hotdog.create([
    "hotdog_name", "devoured"
  ], [
    req.body.hotdog_name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/hotdogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  hotdog.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/hotdogs/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  hotdog.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;