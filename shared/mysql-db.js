var MysqlDB = function () { };
var mysql = require('mysql');

var pool = mysql.createPool({
    host: "192.168.99.100",
    user: "issue",
    password: "issue",
    database: "issue_db",
    connectionLimit: 10,
    multipleStatements: true
});

MysqlDB.prototype.query = function (sql, cb) {
    pool.getConnection(function (err, _con) {
        if (err) {
            console.error('Connection fail');
            console.error(err);
        } else {
            _con.query(sql, function (err, result) {
                _con.release();
                cb(err, result);
            });
        }
    });
};

module.exports = new MysqlDB();
