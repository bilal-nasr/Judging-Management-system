const  getDBData = require("../../model/getDbData");
const bcrypt = require("bcryptjs");

exports.getAllJuries = async (req, res) => {
    try {
        const data = await getDBData(
            "SELECT * FROM JudgeView WHERE UserRole='J'"
        );
        if (!data || data.length === 0)
            res.json({ success: true, message: "No data found" });
        res.json({ success: true, data });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getJury = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getDBData(
            "SELECT * FROM JudgeView WHERE JudgeId = ?",
            [id]
        );
        if (data.length === 0) {
            res.status(404).json({ success: false, message: "Jury not found" });
        } else {
            res.json({ success: true, data: data[0] });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
//TODO: test after 
exports.createJury = async (req, res) => {
    try {
        const { username, password, name, description,bootcamptype } = req.body;
        const checkUser = await getDBData(
            "SELECT * FROM users WHERE username = ?",
            [username]
        );
        if (checkUser.length > 0) {
            res.json({ success: false, message: "User is already created" });
            return;
        }
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        const result = await getDBData(
            "INSERT INTO users (username, password, name, role) VALUES (?, ?, ?, 'J')",
            [username, hashedPassword, name]
        );
        const userID = await getDBData(
            "SELECT userId FROM users WHERE username = ?",
            [username]
        );
        const jury = await getDBData(
            "INSERT INTO jury (description, users_userId) VALUES (?, ?)",
            [description, userID[0].userId]
        );

        //TODO: select 
        const [juryID]= await getDBData(`select juryId from jury where users_userId=?`,[userID[0].userId])
        const [bootcampId]= await getDBData(`select bootcampId from bootcamps where type=?`,[bootcamptype])

        const juryBootcamp= await getDBData("insert into jury_has_bootcamps (jury_juryId, bootcamps_bootcampId) values (?,?)",[juryID.juryId, bootcampId.bootcampId])


        if (juryBootcamp.affectedRows===1) {
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
        const { id } = req.params;
        const { username, password, name, description } = req.body;

        const [userId] = await getDBData("select users_userId from jury where juryId = ? ",[id])
        let result;
        if(password == ""){
             result = await getDBData(
                "UPDATE users SET username = ?, name = ? WHERE userId = ?",
                [username, name, userId.users_userId]
            );
        }
        else{
            const hashedPassword = await bcrypt.hash(password, 10);
             result = await getDBData(
                "UPDATE users SET username = ?, password = ?, name = ? WHERE userId = ?",
                [username, hashedPassword, name, userId.users_userId]
            );
        }
        const jury = await getDBData(
            "UPDATE jury SET description = ? WHERE users_userId = ?",
            [description, userId.users_userId]
        );

        if (result.affectedRows === 1 && jury.affectedRows === 1) {
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
        const { id } = req.params;

        const [userId] = await getDBData("select users_userId from jury where juryId=?",[id])
        const result2 = await getDBData(
            "DELETE FROM jury_has_bootcamps WHERE jury_juryId= ?",
            [id]
        );
        const result = await getDBData(
            "DELETE FROM jury WHERE users_userId = ?",
            [userId.users_userId]
        );
        
        const userResult = await getDBData(
            "DELETE FROM users WHERE userId = ?",
            [userId.users_userId]
        );
        if (result2.affectedRows === 1 && result.affectedRows === 1 && userResult.affectedRows === 1) {
            res.json({ success: true, message: "Jury deleted successfully" });
        } else {
            res.json({ success: false, message: "Failed to delete the jury" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
 