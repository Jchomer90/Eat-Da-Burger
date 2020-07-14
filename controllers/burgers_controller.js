const express = require("express");

let router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
        let burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burgers", function(req,res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json ({ id: result.insertId })
    }
    )
});

router.put("/", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    burger.update({
        burger_name: req.body.newBurgerName
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
          } else {
            res.status(200).end();
          }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    burgers.delete(req.params.id, function() {
        res.redirect("/api/burgers");
    })
});

module.exports = router;