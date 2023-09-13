const mysql = require("mysql2/promise");
const dotenv = require("dotenv")

global.pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "jms",
  password: "Bilal@2711",
  port: "3306",
});

module.exports = pool;
