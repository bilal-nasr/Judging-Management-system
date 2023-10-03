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
