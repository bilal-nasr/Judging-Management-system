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

exports.getAdmin= async (req,res)=>{
    try {
        const {id}=req.params//hon akalte kaf 3laya la2an 3emle copy paste bilal:"n9ebre ktebeyon"
        //hon getting the id from the link (url)
        const [data] = await SAdmindb(`select * from admin_users_view where adminId=${id}`)
        //hon mnhot star la2an badna njeeb all columns of the this admin 
        res.json(data.adminId)

    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message:"internal server error"});
    }
}

exports.updateAdmin= async