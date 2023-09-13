const dbConnect = require("../dbConnect");

async function getDBData(query){
    try {
        // Assuming you want to use a query parameter to filter data, you can access it as req.query.parameter_name
        // Example: const name = req.query.name;
    
        // If you want to fetch all data from the "users" table, you can use a simple SELECT query like this:
        console.log("from getdb data")
        console.log(query)
        const connection = await dbConnect.getConnection();
        const [rows] = await connection.execute(query);
        console.log(rows)
        return rows;
      } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({ success: false, message: "Error fetching data" });
      }
}

module.exports = getDBData;

