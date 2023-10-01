const  getDBData  = require("../../model/getDbData")

exports.AddJuryStartupGrade = async (req, res) => {
    const { grade, token, name } = req.body
    try {
        const [judgeId] = await getDBData(
            "SELECT judgeId FROM JudgeView WHERE UserToken = ?",
            [token]
        );
        const jId = judgeId.JudgeId;

        const [startupID] = await getDBData(
            "SELECT startupId FROM startups WHERE name = ?",
            [name]
        );
        const sId = startupID.startupId;

        const response = await getDBData(
            "INSERT INTO jury_startup_grades (jury_id, startup_id, grade) VALUES (?, ?, ?)",
            [jId, sId, grade]
        );

        res.json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getAllCriteria = async (req, res) => {
    try {
        const criteria = await getDBData("SELECT * FROM criteria");
        if (criteria.length > 0)
            res.json({ success: true, criteria });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.createCriteria = async (req, res) => {
    try {
        const { name, description, maxgrade } = req.body;
        const criteria = await getDBData(
            "INSERT INTO criteria (name, description, max_grade) VALUES (?, ?, ?)",
            [name, description, maxgrade]
        );
        if (criteria.affectedRows > 0) {
            res.json({ success: true, message: "Criteria created successfully" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.updateCriteria = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, max_grade } = req.body;
        const criteria = await getDBData(
            "UPDATE criteria SET name = ?, description = ?, max_grade = ? WHERE id = ?",
            [name, description, max_grade, parseInt(id)]
        );
        if (criteria.affectedRows > 0) {
            res.json({ success: true, message: "Criteria updated successfully" });
        } else {
            res.status(404).json({ success: false, message: "Criteria not found" });
        }
    } catch (error) {
        console.error("Error updating criteria:", error);
        res.status(500).json({ success: false, message: "Failed to update criteria" });
    }
};

exports.deleteCriteria = async (req, res) => {
    try {
        const { id } = req.params;
        const criteria = await getDBData(
            "DELETE FROM criteria WHERE id = ?",
            [id]
        );
        if (criteria.affectedRows > 0) {
            res.json({ success: true, message: "Criteria is deleted" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
