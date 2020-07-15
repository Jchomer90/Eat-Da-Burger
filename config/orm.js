const connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

function objToSql(ob) {
    let arr = [];
    for (var key in ob) {
        arr.push(key + "=" + value);
        }
    return arr.toString();
}

let orm = {
    selectAll: function(table, cb) {

        connection.query(`SELECT * FROM ${table};`, function(err, data) {
            console.log({data_orm:data})
            if (err) throw err;
            console.log({data:data})
            cb(data);
        });
    },
    insertOne: function(table, cols, vals, cb) {
        let query = `INSERT INTO ${table};`;

        query += " (";
        query += cols.toString();
        query += ") ";
        query += "VALUES (";
        query += printQuestionMarks(vals.length);
        query += ") ";

        console.log(query);

        connection.query(query, vals, function(err, data) {
            if (err) throw err;
            cb(data);
        });
    },
    updateOne: function(table, objColVals, condition, cb) {
        let query = `UPDATE ${table};`;

        query += " SET ";
        query += objToSql(objColVals);
        query += " WHERE ";
        query += condition;

        connection.query(query, function (err, data) {
            if (err) throw err;
            cb(data);
        });
    }
}

module.exports = orm;