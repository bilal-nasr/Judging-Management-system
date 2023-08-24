const mysql = require("mysql2/promise");

global.pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "test",
  password: "Bilal@2711",
  port: "3306",
});

module.exports = pool;
