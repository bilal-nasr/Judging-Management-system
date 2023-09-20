const dbJury = require("../model/getDbData")

exports.getAllJuries = async (req, res) => {
    try {
        const data = await dbJury(`select * from JudgeView where UserRole='J'`)
        console.log(data)
        if (!data)
            res.json({ success: true, message: "no data found" })
        res.json({ success: true, data });
    } catch (error) {
        console.log(error)
    }
}
exports.getJury = async(req,res)=>{
    try {
        const data =await dbJury(`select * from JudgeView WHERE Jury_id=${id}`) 
       
    } catch () {
        
    }
}

exports.createJury = async (req, res) => {
    try {
        const { username,password, name} = req.body; // Assuming you have these properties in your request body

        // Insert a new jury into the database
        const insertQuery = `INSERT INTO ( username,password, name) VALUES (?, ?, ?)`;
        const result = await dbJury(insertQuery, [ username,password, name]);

        if (result.affectedRows === 1) {
            res.json({ success: true, message: "Jury created successfully" });
        } else {
            res.json({ success: false, message: "Failed to create a jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.updateJury = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you have the ID of the jury to update in the URL
        const {  username,password, name } = req.body; // Assuming you have these properties in your request body

        // Update the jury in the database
        const updateQuery = `UPDATE JudgeView SET UserName=?, password=?, name=? WHERE ID=?`;
        const result = await dbJury(updateQuery, [ username,password, name]);

        if (result.affectedRows === 1) {
            res.json({ success: true, message: "Jury updated successfully" });
        } else {
            res.json({ success: false, message: "Failed to update the jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
exports.deleteJury = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you have the ID of the jury to delete in the URL

        // Delete the jury from the database
        const deleteQuery = `DELETE FROM JudgeView WHERE ID=?`;
        const result = await dbJury(deleteQuery, [id]);

        if (result.affectedRows === 1) {
            res.json({ success: true, message: "Jury deleted successfully" });
        } else {
            res.json({ success: false, message: "Failed to delete the jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};




