// const dbConnect = require("../dbConnect");

// async function getDBData(query) {
//     try {
//         // Assuming you want to use a query parameter to filter data, you can access it as req.query.parameter_name
//         // Example: const name = req.query.name;

//         // If you want to fetch all data from the "users" table, you can use a simple SELECT query like this:
//         const connection = await dbConnect.getConnection();
//         const [rows] = await connection.execute(query);
//         return rows;
//     } catch (error) {
//         console.error("Error fetching data:", error);
//     }
// }

// module.exports = getDBData;

const dbConnect = require("../dbConnect");

// Reusable connection pool
const pool = dbConnect;

async function getDBData(query, params = []) {
    let connection;
    try {
        connection = await pool.getConnection();
        const [rows] = await connection.execute(query, params);
        return rows;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Re-throw the error to be handled by the caller
    } finally {
        if (connection) {
            connection.release(); // Release the connection back to the pool
        }
    }
}

module.exports = getDBData;
