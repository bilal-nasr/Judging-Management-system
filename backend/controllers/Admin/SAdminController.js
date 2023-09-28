const SAdmindb = require("../../model/getDbData")

exports.createAdmin = async (req, res) => {
    try {
        const { username, password, name, description } = req.body
        //hon bade shoof iza 3nde l user bl awal ta iza ken fe bhal name ma ydakhlo
        const userCheck = await SAdmindb(`select * from users where username='${username}'`)//hon he checked iza ken mawjood
        if (userCheck.length > 0) {
            //hon iza length akbar min zero y3ne fe user b hayda l name , hon ma hatayt length la2an mshselect *
            res.json({ success: false, message: "user is already created " })
        }
        const data = await SAdmindb(`insert into users (username, password, name, role) values('${username}', '${password}','${name}','A') `)
        if (data.length > 0) {
            res.json({ success: false, message: "error adding user " })
        }
        const [id] = await SAdmindb(`select userId from users where username='${username}'`)
        const admin = await SAdmindb(`insert into admin (description, user_id ) values ('${description}', ${id.userId})`)
        if (admin.affectedRows > 0) {
            res.json({ success: true, message: "admin is created successfully" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};


exports.getAllAdmins = async (req, res) => {
    try {
        const data = await SAdmindb(`select * from admin_users_view`)//hon lal view la2an user w admin
        if (!data)
            res.json({ success: false, message: "no data found" })
        res.json({ success: true, data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.getAdmin = async (req, res) => {
    try {
        const { id } = req.params//hon akalte kaf 3laya la2an 3emle copy paste bilal:"n9ebre ktebeyon"
        //hon getting the id from the link (url) from frontend
        const [data] = await SAdmindb(`select * from admin_users_view where adminId=${id}`)
        //hon mnhot star la2an badna njeeb all columns of the this admin 
        res.json(data.adminId)

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "internal server error" });
    }
}
// hon bade 3ayet lal id mnl url or link , hon mnhot bl req.body l name description username bas l password iza ma bade 
//a3melo update ma bdakhel she fa bade ello ino iza ma dakhalt she ma tekheda 3al database
exports.updateAdmin = async (req, res) => {
    try {
        const { id } = req.params
        const { username, name, description, password } = req.body
        
        const [data] = await SAdmindb(`select * from admin where adminId=${parseInt(id)}`)
        
        if (!password) {
            const user = SAdmindb(`update users set username='${username}', name='${name}' where userId=${data.user_id}`)

            if (user.affectedRows < 1)
                res.json({ success: false, message: "error update admin" })

            const admin = SAdmindb(`update admin set description='${description}' where user_id=${data.user_id}`)

            if (admin.affectedRows < 1)
                res.json({ success: false, message: "error update admin" })

            res.json({ success: true, message: "admin updated" })

        }
        else {

            const user = SAdmindb(`update users set username='${username}', name='${name}',password=${password} where userId=${id}`)
            if (user.affectedRows < 1)
                res.json({ success: false, message: "error update admin" })

            const admin = SAdmindb(`update admin set description='${description}' where user_id=${id}`)
            if (admin.affectedRows < 1)
                res.json({ success: false, message: "error update admin" })

            res.json({ success: true, message: "admin updated" })

        }

    } catch (error) {

    }
}