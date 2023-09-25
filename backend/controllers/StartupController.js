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


exports.createStartup = async (req, res) => {

    try {
        const { name, description,bootcampType } = req.body; 
        
        const data = await startupdb(`select bootcampId from bootcamps where type='${bootcampType}'`)
        //hon jebet l id lal bootcamp isa bade erja3 dakhel l startup b hayda l bootcamp
        if (!data) {
            res.json({ success: false, message: "Bootcamp not found " });
            return;
        }
        const id = parseInt(data[0].bootcampId);
        const result = await startupdb(`INSERT INTO  startups (name, description,bootcamps_bootcampId) values ('${name}','${description}',${id})`);

        if (result.affectedRows > 0) {
            res.json({ success: true, message: "startup created successfully" });
        } else {
            res.json({ success: false, message: "Failed to create a jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}


