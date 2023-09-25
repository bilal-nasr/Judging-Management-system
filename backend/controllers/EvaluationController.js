//TODO: add jury startup grade table , 
//TODO: function to get the added grades of the jury and startup to add them to startup criteria
const criteriadb = require("../model/getDbData")

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

    }
}
//TODO: 