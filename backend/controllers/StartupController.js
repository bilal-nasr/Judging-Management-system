const startupdb = require("../model/getDbData");

exports.getAllStartups = async (req, res) => {
    try {
        const data = await startupdb(`SELECT * FROM StartupsWithBootcamps`);
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
        const data = await startupdb(`SELECT * FROM StartupsWithBootcamps WHERE startup_id = ${id}`);

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
    const id = req.params.id;
    const data = req.body;

    try {
        await startupdb(`
            UPDATE Startups
            SET name = '${data.name}', description = '${data.description}'
            WHERE startup_id = ${id}
        `);

        res.json({ success: true, message: "Startup updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteStartup = async (req, res) => {
    const id = req.params.id;
    try {
        await startupdb(`DELETE FROM startups WHERE startup_id = ${id}`);
        res.json({ success: true, message: "Startup deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.createStartup = async (req, res) => {
    const { name, description } = req.body;
    try {

    } catch (err) {

    }
}