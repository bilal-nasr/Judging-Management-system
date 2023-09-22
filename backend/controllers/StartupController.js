const startupdb = require("../model/getDbData");

exports.getAllStartups = async (req, res) => {
    try {
        const data = await startupdb(`SELECT * FROM startups`);
        console.log(data);

        if (data.length === 0) {
            res.json({ success: false, message: "No data found" });
        } else {
            res.json({ success: true, data });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getStartup = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await startupdb(`SELECT * FROM startups WHERE startupId = ${id}`);

        if (data.length === 0) {
            res.json({ success: false, message: "Startup not found" });
        } else {
            res.json({ success: true, data: data[0] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.updateStartup = async (req, res) => {
    try {
        const id = req.params.id;
        const { name, description } = req.body;

        const result = await startupdb(`UPDATE startups SET name = '${name}', description = '${description}'
            WHERE startupId = ${parseInt(id)}`);
        if (result.affectedRows > 0)
            res.json({ success: true, message: "Startup updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteStartup = async (req, res) => {
    const id = req.params.id;
    try {
        await startupdb(`DELETE FROM startups WHERE startupId = ${id}`);
        res.json({ success: true, message: "Startup deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

//TODO: add the bootcamp id which is the forenkey for the startup
exports.createStartup = async (req, res) => {

    try {
        const { name, description } = req.body; // Assuming you have these properties in your request body

        // Insert a new jury into the database
        //const insertQuery = ;
        const result = await startupdb(`INSERT INTO  startups (name, description) values ('${name}','${description}')`);

        if (result.affectedRows > 0) {
            res.json({ success: true, message: "Jury created successfully" });
        } else {
            res.json({ success: false, message: "Failed to create a jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

