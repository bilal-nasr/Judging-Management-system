const dbConnect = require("../dbConnect");

async function getDBData(query){
    try {
        // Assuming you want to use a query parameter to filter data, you can access it as req.query.parameter_name
        // Example: const name = req.query.name;
    
        // If you want to fetch all data from the "users" table, you can use a simple SELECT query like this:
        const connection = await dbConnect.getConnection();
        const [rows] = await connection.execute(query);
        return rows;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
}

module.exports = getDBData;

