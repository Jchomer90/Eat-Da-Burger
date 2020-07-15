const connection = require("../config/connection.js");

function objToSql(ob) {
    let arr = [];
    for (var key in ob) {
        if (Object.hasOwnProperty.call(ob, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
}

// Create methods 'selectAll()' 'insertOne' 'updateOne()'
let orm = {
    selectAll: function(table, cb) {
        connection.query(`SELECT * FROM ${table}`, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        connection.query(`INSERT INTO ${table}${cols} VALUES ${vals}`, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        connection.query(`UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;