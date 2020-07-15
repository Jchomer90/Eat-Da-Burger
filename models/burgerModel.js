const orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            console.log({data_model:res})
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.create("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    // delete: function(condition, cb) {
    //     orm.delete("burgers", condition, function(res) {
    //         cb(res);
    //     });
    // }
};


module.exports = burger;