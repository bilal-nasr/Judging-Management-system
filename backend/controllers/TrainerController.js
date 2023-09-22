const Trainersdb = require("../model/getDbData");

exports.getAllTrainers = async (req, res) => {
    try {
        const data = await Trainersdb(`SELECT * FROM instructors_bootcamps_view `);
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
        const data = await Trainersdb(`SELECT * FROM instructors_bootcamps_view WHERE instructorsId = ${id}`);
        if (!data) {
            res.json({ success: false, message: "instructor not found" });
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
        const response = await Trainersdb(`
            UPDATE instructors
            SET name = '${data.name}', description = '${data.description}'
            WHERE instructorsId = ${id}`);
        if (response.affectedRows > 0)
            res.json({ success: true, message: "instructors updated successfully" });
        else {
            res.json({ success: false, message: "failed to update" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteTrainer = async (req, res) => {
    const id = req.params.id;
    try {
        await Trainersdb(`DELETE FROM instructors WHERE instructorId = ${id}`);
        res.json({ success: true, message: "trainers deleted successfully" });
        if (response.affectedRows > 0)
            res.json({ success: true, message: "deleted" });
        else {
            res.json({ success: false, message: "failed to delete" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.createTrainer = async (req, res) => {
    const { name, description,bootcampType } = req.body;
    const currentDate= new Date();
    const year = currentDate.getFullYear();

    try {
        const data = await Trainersdb(`select bootcampId from bootcamps where type='${bootcampType}' and year=${year} `)
        //hon jebet l bootcamp id bena2an 3al type w year
        const id = parseInt(data[0].bootcampId);
        const Trainer = await Trainersdb(`Insert into instructors (name,description,bootcamps_bootcampId ) values('${name}', '${description}', ${id} )`)
        if (Trainer.affectedRows > 0)
            res.json({ success: true, message: "trainer is added" });
        else {
            res.json({ success: false, message: "failed to add trainer" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}