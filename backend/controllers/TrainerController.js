const Trainersdb = require("../model/getDbData");

exports.getAllTrainers = async (req, res) => {
    try {
        const data = await Trainersdb(`SELECT * FROM StartupsWithBootcamps`);
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

exports.getTrainer = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await Trainersdb(`SELECT * FROM StartupsWithBootcamps WHERE startup_id = ${id}`);

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

exports.updateTrainer = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        await Trainersdbdb(`
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

exports.deleteTrainer = async (req, res) => {
    const id = req.params.id;
    try {
        await Trainersdb(`DELETE FROM startups WHERE startup_id = ${id}`);
        res.json({ success: true, message: "Startup deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.createTrainer=async (req,res)=>{
    const {name, description} = req.body;
    try {
        
    } catch (err) {
        
    }
}