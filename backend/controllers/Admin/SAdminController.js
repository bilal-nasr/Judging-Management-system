const getDBData = require("../../model/getDbData"); // Import your getDBData function
const bcrypt = require("bcryptjs");


exports.createAdmin = async (req, res) => {
    try {
        const { username, password, name, description } = req.body;
        // Check if the username is already taken
        const [existingUser] = await getDBData("SELECT * FROM users WHERE username=?", [username]);

        if (existingUser) {
            return res.json({ success: false, message: "User is already created" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the new user into the database
        const userQuery = "INSERT INTO users (username, password, name, role) VALUES (?, ?, ?, 'A')";
        const userResult = await getDBData(userQuery, [username, hashedPassword, name]);

        if (userResult.affectedRows !== 1) {
            return res.json({ success: false, message: "Error adding user" });
        }

        // Get the inserted user's ID
        const [id] = await getDBData("SELECT LAST_INSERT_ID() as id");

        // Insert admin information
        const adminQuery = "INSERT INTO admin (description, user_id) VALUES (?, ?)";
        const adminResult = await getDBData(adminQuery, [description, id.id]);

        if (adminResult.affectedRows !== 1) {
            return res.json({ success: false, message: "Error adding admin" });
        }

        res.json({ success: true, message: "Admin is created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getAllAdmins = async (req, res) => {
    try {
        const adminData = await getDBData("SELECT * FROM admin_users_view");
        res.json({ success: true, data: adminData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.getAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const [adminData] = await getDBData("SELECT * FROM admin_users_view WHERE adminId=?", [id]);

        if (!adminData) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        res.json({ success: true, data: adminData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.updateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, name, description, password } = req.body;

        const [adminData] = await getDBData("SELECT * FROM admin WHERE adminId=?", [id]);

        if (!adminData) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        const updateUserQuery = "UPDATE users SET username=?, name=? WHERE userId=?";
        const userResult = await getDBData(updateUserQuery, [username, name, adminData.user_id]);

        if (userResult.affectedRows < 1) {
            return res.json({ success: false, message: "Error updating admin user" });
        }

        if (password) {
            // Hash and update the password if provided
            const hashedPassword = await bcrypt.hash(password, 10);
            const updatePasswordQuery = "UPDATE users SET password=? WHERE userId=?";
            await getDBData(updatePasswordQuery, [hashedPassword, adminData.user_id]);
        }

        const updateAdminQuery = "UPDATE admin SET description=? WHERE user_id=?";
        const adminResult = await getDBData(updateAdminQuery, [description, adminData.user_id]);

        if (adminResult.affectedRows < 1) {
            return res.json({ success: false, message: "Error updating admin" });
        }

        res.json({ success: true, message: "Admin updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

exports.deleteAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const [adminData] = await getDBData("SELECT user_id FROM admin WHERE adminId=?", [id]);

        if (!adminData) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }

        const deleteUserQuery = "DELETE FROM users WHERE userId=?";
        const userResult = await getDBData(deleteUserQuery, [adminData.user_id]);

        if (userResult.affectedRows < 1) {
            return res.json({ success: false, message: "Error deleting admin user" });
        }

        res.json({ success: true, message: "Admin deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};
