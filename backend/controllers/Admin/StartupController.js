const startupdb = require("../../model/getDbData");

exports.getAllStartups = async (req, res) => {
    try {
        const data = await startupdb("SELECT * FROM startups");
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
        const data = await startupdb("SELECT * FROM startups WHERE startupId = ?", [id]);

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

        const result = await startupdb("UPDATE startups SET name = ?, description = ? WHERE startupId = ?", [name, description, id]);
        if (result.affectedRows > 0) {
            res.json({ success: true, message: "Startup updated successfully" });
        } else {
            res.json({ success: false, message: "Startup not found or not updated" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteStartup = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await startupdb("DELETE FROM startups WHERE startupId = ?", [id]);
        if (result.affectedRows > 0) {
            res.json({ success: true, message: "Startup deleted successfully" });
        } else {
            res.json({ success: false, message: "Startup not found or not deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.createStartup = async (req, res) => {
    try {
        const { name, description, bootcampType } = req.body;

        const bootcampData = await startupdb("SELECT bootcampId FROM bootcamps WHERE type = ?", [bootcampType]);

        if (bootcampData.length === 0) {
            res.json({ success: false, message: "Bootcamp not found" });
            return;
        }

        const bootcampId = bootcampData[0].bootcampId;
        const result = await startupdb("INSERT INTO startups (name, description, bootcamps_bootcampId) VALUES (?, ?, ?)", [name, description, bootcampId]);

        if (result.affectedRows > 0) {
            res.json({ success: true, message: "Startup created successfully" });
        } else {
            res.json({ success: false, message: "Failed to create a startup" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
