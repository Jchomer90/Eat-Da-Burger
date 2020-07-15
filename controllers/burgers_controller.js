const express = require("express");

let router = express.Router();

let burger = require("../models/burgerModel.js");

router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burgerData: data });
    });
});

router.post("/api/burgers", function(req,res) {
    burger.insertOne(req.body._name, function(result) {
        console.log(result);
        res.redirect("/");
    });
});

router.put("/burgers/:id", function (req, res) {
    burger.updateOne(req.params.id, function(data) {
        console.log(data);
        res.sendStatus(200);
    });
});




//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);
//     burger.updateOne({
//         burger_name: req.body.newBurgerName
//     }, condition, function(result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//           } else {
//             res.status(200).end();
//           }
//     });
// });

// router.delete("/api/burgers/:id", function(req, res) {
//     burgers.delete(req.params.id, function() {
//         res.redirect("/api/burgers");
//     })
// });

module.exports = router;