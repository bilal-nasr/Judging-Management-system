const Trainersdb = require("../../model/getDbData");

exports.getAllTrainers = async (req, res) => {
    try {
        const data = await Trainersdb("SELECT * FROM instructors_bootcamps_view");
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
        const data = await Trainersdb("SELECT * FROM instructors_bootcamps_view WHERE instructorsId = ?", [id]);
        if (!data) {
            res.json({ success: false, message: "Instructor not found" });
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
        const response = await Trainersdb(
            "UPDATE instructors SET name = ?, description = ? WHERE instructorsId = ?",
            [data.name, data.description, id]
        );
        if (response.affectedRows > 0) {
            res.json({ success: true, message: "Instructor updated successfully" });
        } else {
            res.json({ success: false, message: "Instructor not found or not updated" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteTrainer = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await Trainersdb("DELETE FROM instructors WHERE instructorsId = ?", [id]);
        if (response.affectedRows > 0) {
            res.json({ success: true, message: "Instructor deleted successfully" });
        } else {
            res.json({ success: false, message: "Instructor not found or not deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.createTrainer = async (req, res) => {
    const { name, description, bootcampType } = req.body;
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    
    try {
        const data = await Trainersdb("SELECT bootcampId FROM bootcamps WHERE type = ? AND year = ?", [bootcampType, year]);
        
        if (data.length === 0) {
            res.json({ success: false, message: "Bootcamp not found for the specified type and year" });
            return;
        }
        
        const bootcampId = data[0].bootcampId;
        const response = await Trainersdb("INSERT INTO instructors (name, description, bootcamps_bootcampId) VALUES (?, ?, ?)", [name, description, bootcampId]);

        if (response.affectedRows > 0) {
            res.json({ success: true, message: "Trainer is added" });
        } else {
            res.json({ success: false, message: "Failed to add trainer" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
