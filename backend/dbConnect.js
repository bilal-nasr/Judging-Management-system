const mysql = require("mysql2/promise");
const dotenv = require("dotenv")

dotenv.config()

global.pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: "3306",
});

module.exports = pool;
