const dbJury = require("../../model/getDbData")

exports.getAllJuries = async (req, res) => {
    try {
        const data = await dbJury(`select * from JudgeView where UserRole='J'`)
        if (!data)
            res.json({ success: true, message: "no data found" })
        res.json({ success: true, data });
    } catch (error) {
        console.log(error)
    }
}
exports.getJury = async (req, res) => {
    try {
        const { id } = req.params; // Assuming the jury ID is part of the URL parameters

        // Use parameterized queries to prevent SQL injection
        const data = await dbJury(`SELECT * FROM JudgeView WHERE JudgeId = ${id}`);
        if (data.length === 0) {
            res.status(404).json({ success: false, message: "Jury not found" });
        } else {
            res.json({ success: true, data: data[0] }); // Assuming you want to return the first result if multiple records match
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.createJury = async (req, res) => {

    try {
        const { username,password, name,description} = req.body; // Assuming you have these properties in your request body

        // Insert a new jury into the database
        const checkUser = await dbJury(`select * from users where username='${username}'`)
        if (checkUser.length>0){
            //hon iza affectedrows akbar min zero y3ne fe user b hayda l name lenght la2an select *
            res.json ({success:false,message :"user is already created "})
        }
        const result = await dbJury(`INSERT INTO  users (username,password,name,role) values ('${username}', '${password}',' ${name}',"J") `);
        const userID = await dbJury(`select userId from users where username='${username}'`)
        //hon jebet l id lal user la erja3 dakhlo bl juries bcz foreign key
        const jury = await dbJury(`Insert into jury (description, users_userId ) values('${description}',${userID[0].userId})`)
        if (result.affectedRows === 1 && jury.affectedRows===1) {
            res.json({ success: true, message: "Jury created successfully" });
        } else {
            res.json({ success: false, message: "Failed to create a jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

//TODO: hash the pass
exports.updateJury = async (req, res) => {
    try {
        const { id } = req.params; // Assuming you have the ID of the jury to update in the URL
        const { username, password, name ,description} = req.body; // Assuming you have these properties in your request body
        // Update the jury in the database
        //const updateQuery = ;
        const result = await dbJury(`UPDATE users SET UserName='${username}', password='${password}', name='${name}' WHERE userId=${parseInt(id)}`);
        const jury = await dbJury(`UPDATE jury SET description='${description}' WHERE users_userId=${parseInt(id)}`) 
        if (result.affectedRows === 1 && jury.affectedRows===1) {
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
        //const deleteQuery 
        const result = await dbJury(`DELETE FROM jury WHERE juryId = ${id}`);
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


