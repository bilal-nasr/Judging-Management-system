const criteriadb = require("../../model/getDbData")

exports.AddJuryStartupGrade = async (req, res) => {
    const { grade, token, name } = req.body
    try {
        const [judgeId] = await criteriadb(`select judgeId from JudgeView where UserToken='${token}'`);
        const jId = judgeId.JudgeId
        const [startupID] = await criteriadb(`select startupId from startups where name ='${name}'`)
        const sId = startupID.startupId
        //hon startupID (variable elle ana 3melta ha tekhod startupid id s8ere from database, startupId is a key
        //located in the object startupID )
        const response = await criteriadb(`insert into jury_startup_grades (jury_id, startup_id, grade) values (${jId},${sId},${grade}) `)
        res.json(response)
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
//TODO:  for criteria /delete
exports.getAllCriteria = async (req, res) => {
    try {
        const criteria = await criteriadb(`select * from criteria`)
        if (criteria.length > 0)
            res.json({ success: true, criteria })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }

}

exports.createCriteria = async (req, res) => {
    try {
        const { name, description, maxgrade } = req.body;
        const criteria = await criteriadb(`insert into criteria (name, description, max_grade) 
        values ('${name}', '${description}', ${maxgrade})`)
        if (criteria.affectedRows > 0) {
            res.json({ success: true, message: "criteria created successfully" })
        }

    } catch (error) {
        console.error(error)
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}
exports.updateCriteria = async (req, res) => {
    try {
        const { id } = req.params
        const { name, description, max_grade } = req.body
        const criteria = await criteriadb(`update criteria set name='${name}', description='${description}', max_grade=${max_grade} where id=${parseInt(id)}`)
        if (criteria.affectedRows > 0) {
            // The update was successful
            res.json({ success: true, message: "Criteria updated successfully" });
        } else {
            // No rows were updated, indicating the criteria with the given ID does not exist
            res.status(404).json({ success: false, message: "Criteria not found" });
        }
    } catch (error) {
        console.error("Error updating criteria:", error);
        res.status(500).json({ success: false, message: "Failed to update criteria" });
    }
}
exports.deleteCriteria=async(req,res)=>{
    try {
        const {id}= req.params
        const criteria= await criteriadb(`delete from criteria where id = ${id}`)
        if (criteria.affectedRows>0){
            res.json({success:true, message:"criteria is deleted"})
        }
    } catch (error) {
        
    }
}
