const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2/promise");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 3006;

const pool = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  database: "test",
  password: "Bilal@2711",
  port: "3306",
});

app.use(bodyParser.json());

app.get("/getdata", async (req, res) => {
  try {
    // Assuming you want to use a query parameter to filter data, you can access it as req.query.parameter_name
    // Example: const name = req.query.name;

    // If you want to fetch all data from the "users" table, you can use a simple SELECT query like this:
    const [rows] = await pool.execute("SELECT * FROM users");

    // Send the fetched data as a JSON response
    res.json(rows);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ success: false, message: "Error fetching data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
